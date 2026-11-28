package expo.modules.t3agentnotifications

import android.app.NotificationChannel
import android.app.Notification
import android.app.AlarmManager
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.net.Uri
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.ProcessLifecycleOwner
import com.google.firebase.messaging.RemoteMessage
import expo.modules.notifications.service.ExpoFirebaseMessagingService
import org.json.JSONArray
import java.security.MessageDigest
import java.text.SimpleDateFormat
import java.util.Locale
import java.util.TimeZone

class AgentMessagingService : ExpoFirebaseMessagingService() {
  override fun onMessageReceived(remoteMessage: RemoteMessage) {
    when (remoteMessage.data["t3_kind"]) {
      "agent_activity" -> AgentNotifications.receive(this, remoteMessage.data)
      // Sent when any client reads the thread, so its card leaves this phone too.
      "agent_dismiss" -> AgentNotifications.dismissThread(
        this,
        remoteMessage.data["dismiss_group"],
        remoteMessage.data["read_at"]
      )
      else -> super.onMessageReceived(remoteMessage)
    }
  }
}

class AgentActivityDismissReceiver : BroadcastReceiver() {
  override fun onReceive(context: Context, intent: Intent) {
    AgentNotifications.dismiss(context)
  }
}

class AgentActivityExpiryReceiver : BroadcastReceiver() {
  override fun onReceive(context: Context, intent: Intent) {
    AgentNotifications.expire(context)
  }
}

/** Handles data pushes natively so delivery does not depend on a running JS bridge. */
object AgentNotifications {
  private const val STORE = "t3-agent-notifications"
  private const val ACTIVITY_CHANNEL = "agent-activity"
  private const val ALERT_CHANNEL = "agent-alerts"
  private const val ACTIVITY_TAG = "t3-agent-activity"
  private const val ALERT_TAG = "t3-agent-alert"
  private const val ALERT_THREAD_TAG = "$ALERT_TAG-thread:"
  private const val ACTIVITY_ID = 73001
  private const val MAX_MESSAGE_AGE_MS = 10 * 60 * 1000L
  private const val RUNNING_LIFETIME_MS = 2 * 60 * 60 * 1000L
  private const val MAX_LIFETIME_MS = 24 * 60 * 60 * 1000L
  private const val MAX_READ_GROUPS = 200
  private const val READ_GROUPS = "readGroupsOrdered"
  private const val READ_AT_PREFIX = "readAt:"
  private const val ALERT_PHASE_PREFIX = "alertPhase:"

  @Synchronized
  fun configure(
    context: Context,
    deviceId: String,
    userId: String,
    scheme: String,
    ongoingEnabled: Boolean
  ) {
    val prefs = context.getSharedPreferences(STORE, Context.MODE_PRIVATE)
    // JS identity is empty on a cold start. Compare the durable identity here
    // so reopening preserves cards, dismissal and replay history for this user.
    if (prefs.getString("userId", null) != userId ||
      prefs.getString("deviceId", null) != deviceId
    ) {
      clear(context)
    }
    val wasEnabled = prefs.getBoolean("ongoing", false)
    prefs.edit().putString(
      "deviceId",
      deviceId
    ).putString("userId", userId).putString("scheme", scheme)
      .putBoolean("enabled", true).putBoolean("ongoing", ongoingEnabled).apply()
    if (ongoingEnabled && !wasEnabled) prefs.edit().putBoolean("dismissed", false).apply()
    if (!ongoingEnabled) cancelActivity(context)
    channels(context)
  }

  @Synchronized
  fun clear(context: Context) {
    cancelActivity(context)
    context.getSharedPreferences(STORE, Context.MODE_PRIVATE).edit().clear().apply()
    val manager = manager(context)
    manager.activeNotifications.filter {
      it.tag == ACTIVITY_TAG || it.tag == ALERT_TAG ||
        it.tag?.startsWith(ALERT_THREAD_TAG) == true ||
        it.tag?.startsWith("$ALERT_TAG-summary:") == true
    }
      .forEach { manager.cancel(it.tag, it.id) }
  }

  @Volatile private var threadOnScreen: String? = null

  fun setThreadOnScreen(path: String?) {
    threadOnScreen = path
  }

  @Synchronized
  fun dismiss(context: Context) {
    context.getSharedPreferences(
      STORE,
      Context.MODE_PRIVATE
    ).edit().putBoolean("dismissed", true).apply()
    cancelActivity(context)
  }

  /**
   * Removes one thread's card after it was read on this phone or another client.
   * The read watermark it records drops a terminal alert that FCM delivers late.
   */
  @Synchronized
  fun dismissThread(context: Context, group: String?, readAt: String?) {
    if (group.isNullOrBlank()) return
    val prefs = context.getSharedPreferences(STORE, Context.MODE_PRIVATE)
    // A card that still waits for an answer stays until the user answers it.
    if (prefs.getString(alertPhaseKey(group), null).isPendingPhase()) return
    val manager = manager(context)
    manager.activeNotifications.filter {
      it.tag == threadAlertTag(group) && it.notification.group == group
    }
      .forEach { manager.cancel(it.tag, it.id) }
    manager.cancel("$ALERT_TAG-summary:$group", 0)
    val readAtMs = epochMillis(readAt) ?: return
    rememberReadAt(prefs, group, readAtMs)
  }

  @Synchronized
  fun expire(context: Context, now: Long = System.currentTimeMillis()) {
    val expiresAt = context.getSharedPreferences(
      STORE,
      Context.MODE_PRIVATE
    ).getLong("expiresAt", 0)
    // An already-dispatched alarm must not remove a newer run's card.
    if (expiresAt > 0 && expiresAt <= now) cancelActivity(context)
  }

  @Synchronized
  fun receive(context: Context, data: Map<String, String>) {
    val prefs = context.getSharedPreferences(STORE, Context.MODE_PRIVATE)
    val updatedAt = data["updated_at"]?.toLongOrNull() ?: return
    val deviceId = prefs.getString("deviceId", null)
    val userId = prefs.getString("userId", null)
    // Topic pushes are addressed to every installation in the Firebase project,
    // so they cannot carry this device's id. They only reach devices that have
    // notifications enabled (configured on sign-in).
    val broadcast = data["broadcast"] == "1"
    val registered = prefs.getBoolean("enabled", false) &&
      (broadcast ||
        (deviceId != null && userId != null &&
          data["device_id"] == deviceId &&
          data["user_hash"] == userHash(userId, deviceId)))
    val fresh = System.currentTimeMillis() - updatedAt in -MAX_MESSAGE_AGE_MS..MAX_MESSAGE_AGE_MS
    if (registered && fresh && NotificationManagerCompat.from(context).areNotificationsEnabled()) {
      channels(context)
      val scheme = prefs.getString("scheme", "t3code") ?: "t3code"
      val alerted = showAlert(context, prefs, scheme, data)
      updateActivity(context, prefs, data, updatedAt, alerted)
    }
  }

  // The relay sends this hash instead of the account id, which FCM would see.
  private fun userHash(userId: String, deviceId: String): String =
    MessageDigest.getInstance("SHA-256").digest("$userId:$deviceId".toByteArray())
      .joinToString("") { "%02x".format(it) }

  private fun showAlert(
    context: Context,
    prefs: SharedPreferences,
    scheme: String,
    data: Map<String, String>
  ): Boolean {
    // Queue retries carry the same alert id. Keep a bounded history even when
    // notification A is retried after notification B has already arrived.
    val alertId = data["alert_id"]
    val seen = prefs.getString("seenAlertsOrdered", null)?.split('\n')
      ?: prefs.getStringSet("seenAlerts", emptySet()).orEmpty().toList()
    if (alertId != null && alertId !in seen) {
      // Consume suppressed alerts so retries cannot resurface them later.
      val resumed = ProcessLifecycleOwner.get().lifecycle.currentState.isAtLeast(
        Lifecycle.State.RESUMED
      )
      val visibleThread = threadOnScreen
      val onScreen = resumed && visibleThread != null && data["alert_path"] == visibleThread
      val group = data["alert_group"]?.takeIf { it.isNotBlank() }
      val phase = data["alert_phase"]
      if (group != null) rememberAlertPhase(prefs, group, phase)
      // Reading is recorded per thread, so a late alert cannot un-dismiss it.
      val readPast = group != null && phase.isPendingPhase().not() &&
        alertTimestampMs(data)?.let { alertAt ->
          val readAt = prefs.getLong(readAtKey(group), 0)
          readAt > 0 && alertAt <= readAt
        } == true
      if (!onScreen && !readPast) {
        postAlert(context, scheme, data, alertId)
      }
      prefs.edit().remove("seenAlerts").putString(
        "seenAlertsOrdered",
        (seen.takeLast(63) + alertId).joinToString("\n")
      ).apply()
      // Android drops posts to a blocked channel, so that alert shows nothing.
      return !onScreen && !readPast && (
        Build.VERSION.SDK_INT < 26 ||
          manager(context).getNotificationChannel(ALERT_CHANNEL)?.importance !=
          NotificationManager.IMPORTANCE_NONE
        )
    }
    return false
  }

  private fun postAlert(
    context: Context,
    scheme: String,
    data: Map<String, String>,
    alertId: String
  ) {
    val title = data["alert_title"].orEmpty().take(120)
    // Grouped alerts list up to five 120-character thread titles.
    val body = data["alert_body"].orEmpty().take(608)
    val threadGroup = data["alert_group"]?.takeIf { it.isNotBlank() }
    // alert_id is unique per turn; keying on the thread makes its next alert replace this one.
    // The tag carries the whole group, since distinct groups can share a String hash.
    val tag = threadGroup?.let { threadAlertTag(it) } ?: ALERT_TAG
    val id = if (threadGroup != null) 0 else alertId.hashCode()
    val group = threadGroup ?: ALERT_TAG
    val notification = base(context, ALERT_CHANNEL)
      .setContentTitle(title).setContentText(body)
      .setStyle(NotificationCompat.BigTextStyle().bigText(body))
      .setAutoCancel(true)
      .setGroup(group)
      .setContentIntent(
        contentIntent(context, scheme, data["alert_path"], (threadGroup ?: alertId).hashCode()),
      )
      .build()
    manager(context).notify(tag, id, notification)
    postGroupSummary(context, scheme, group, data)
  }

  private fun postGroupSummary(
    context: Context,
    scheme: String,
    group: String,
    data: Map<String, String>
  ) {
    val children = manager(context).activeNotifications.filter {
      it.tag == ALERT_TAG && it.notification.group == group
    }
    if (children.size <= 1) return
    val style = NotificationCompat.InboxStyle()
    children.forEach {
      style.addLine(it.notification.extras.getCharSequence(android.app.Notification.EXTRA_TEXT))
    }
    val summary = base(context, ALERT_CHANNEL)
      .setContentTitle(data["alert_title"].orEmpty().take(120))
      .setContentText(data["alert_body"].orEmpty().take(608))
      .setStyle(style)
      .setGroup(group)
      .setGroupSummary(true)
      .setSilent(true)
      .setAutoCancel(true)
      .setContentIntent(contentIntent(context, scheme, data["alert_path"], 0))
      .build()
    manager(context).notify("$ALERT_TAG-summary:$group", 0, summary)
  }

  private fun threadAlertTag(group: String) = "$ALERT_THREAD_TAG$group"

  private fun readAtKey(group: String) = "$READ_AT_PREFIX$group"

  private fun alertPhaseKey(group: String) = "$ALERT_PHASE_PREFIX$group"

  private fun String?.isPendingPhase() =
    this == "waiting_for_approval" || this == "waiting_for_input"

  // A live wait is protected from dismissal, and answering it re-arms the
  // thread: a pending phase clears the read watermark an earlier read left.
  private fun rememberAlertPhase(prefs: SharedPreferences, group: String, phase: String?) {
    val edit = prefs.edit()
    if (phase.isPendingPhase()) {
      edit.putString(alertPhaseKey(group), phase).remove(readAtKey(group))
    } else {
      edit.remove(alertPhaseKey(group))
    }
    edit.apply()
  }

  private fun rememberReadAt(prefs: SharedPreferences, group: String, readAt: Long) {
    val ordered = prefs.getString(READ_GROUPS, null)?.split('\n')?.filter { it.isNotEmpty() }
      .orEmpty()
    val next = (ordered - group) + group
    val kept = next.takeLast(MAX_READ_GROUPS)
    val edit = prefs.edit().putString(READ_GROUPS, kept.joinToString("\n"))
    for (old in next.take(next.size - kept.size)) edit.remove(readAtKey(old))
    edit.putLong(readAtKey(group), readAt).apply()
  }

  // `alert_at` is ISO or epoch millis; older payloads only carry it inside `alert_id`.
  private fun alertTimestampMs(data: Map<String, String>): Long? =
    epochMillis(data["alert_at"]) ?: runCatching {
      val parts = JSONArray(data["alert_id"])
      epochMillis(if (parts.length() >= 4) parts.optString(3) else null)
    }.getOrNull()

  private fun epochMillis(value: String?): Long? {
    if (value.isNullOrBlank()) return null
    value.toLongOrNull()?.let { return it }
    return runCatching {
      val format = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US)
      format.timeZone = TimeZone.getTimeZone("UTC")
      format.parse(value)?.time
    }.getOrNull()
  }

  /**
   * Renders a relay-shaped payload without the registration, freshness and
   * foreground checks, for the showcase capture's staged notifications.
   */
  @Synchronized
  fun showcase(context: Context, scheme: String, data: Map<String, String>) {
    channels(context)
    data["alert_id"]?.let { postAlert(context, scheme, data, it) }
    showActivity(context, scheme, data, data["active"] == "true", RUNNING_LIFETIME_MS)
  }

  private fun updateActivity(
    context: Context,
    prefs: SharedPreferences,
    data: Map<String, String>,
    updatedAt: Long,
    alerted: Boolean
  ) {
    val terminal = singleTerminal(data)
    // Only a one-row card on the alert's own thread is known to show nothing more
    // than the alert. Grouped alerts and cards with other rows stay visible.
    val covered = terminal?.takeIf { alerted && data["alert_path"] == data["activity_path"] }
    if (covered != null) coverTerminal(prefs, covered, updatedAt)
    if (updatedAt < prefs.getLong("lastUpdate", 0)) {
      // A newer replay of this same finish may already show the card.
      if (isCovered(prefs, prefs.getString("lastTerminal", null))) cancelActivity(context)
      return
    }
    prefs.edit().putLong("lastUpdate", updatedAt).putString("lastTerminal", terminal).apply()
    val active = data["active"] == "true"
    // Use absolute state expiry: a replay must not extend a finished card or
    // make an abandoned host look active indefinitely. Older relays omit it.
    val expiresAt = data["activity_expires_at"]?.toLongOrNull()
      ?: if (active) updatedAt + RUNNING_LIFETIME_MS else 0L
    val remainingMs = (expiresAt - System.currentTimeMillis()).coerceAtMost(MAX_LIFETIME_MS)
    val wasActive = prefs.getBoolean("lastActive", false)
    prefs.edit().putBoolean("lastActive", active).apply()
    if (remainingMs <= 0 || !prefs.getBoolean("ongoing", false)) {
      cancelActivity(context)
      prefs.edit().putBoolean("dismissed", false).apply()
      return
    }
    // Dismissing a run includes its finished card. A new run, or toggling
    // activity off/on, arms it again; terminal replays stay dismissed.
    if (active && !wasActive) prefs.edit().putBoolean("dismissed", false).apply()
    if (prefs.getBoolean("dismissed", false) || isCovered(prefs, terminal)) {
      cancelActivity(context)
    } else {
      val scheme = prefs.getString("scheme", "t3code") ?: "t3code"
      showActivity(context, scheme, data, active, remainingMs)
    }
  }

  /** Identifies a finished one-thread card by its path, phase and absolute expiry. */
  private fun singleTerminal(data: Map<String, String>): String? {
    val phase = data["activity_phase"]
    val finished = phase == "completed" || phase == "failed"
    val single = data.containsKey("activity_line_0") && !data.containsKey("activity_line_1")
    val expiresAt = data["activity_expires_at"]
    return "${data["activity_path"]}\n$phase\n$expiresAt"
      .takeIf { finished && single && expiresAt != null }
  }

  private fun isCovered(prefs: SharedPreferences, terminal: String?) =
    terminal != null && terminal == prefs.getString("coveredTerminal", null)

  private fun coverTerminal(prefs: SharedPreferences, terminal: String?, updatedAt: Long) {
    if (updatedAt >= prefs.getLong("lastUpdate", 0) ||
      prefs.getString("lastTerminal", null) == terminal
    ) {
      prefs.edit().putString("coveredTerminal", terminal).apply()
    }
  }

  private fun showActivity(
    context: Context,
    scheme: String,
    data: Map<String, String>,
    active: Boolean,
    remainingMs: Long
  ) {
    val dismissIntent = PendingIntent.getBroadcast(
      context,
      ACTIVITY_ID,
      Intent(context, AgentActivityDismissReceiver::class.java),
      PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
    )
    val presentation = ActivityPresentation(data, active)
    val openThread = contentIntent(context, scheme, data["activity_path"], ACTIVITY_ID)
    // Retained results still need Android's ongoing flag to remain promoted.
    val ongoing = active || Build.VERSION.SDK_INT >= 36
    val builder = base(context, ACTIVITY_CHANNEL)
      .setOngoing(ongoing).setOnlyAlertOnce(true).setSilent(true)
      .setTimeoutAfter(remainingMs)
      // Live Updates must remain uncolorized to qualify for promotion.
      .setColorized(false)
      .setRequestPromotedOngoing(ongoing)
      .setShortCriticalText(if (ongoing) presentation.chip else null)
      .setContentIntent(openThread)
      .setDeleteIntent(dismissIntent)
    presentation.applyTo(builder, context)
    val action = presentation.action
    if (action != null && openThread != null) builder.addAction(0, action, openThread)
    if (ongoing) builder.addAction(0, "Dismiss", dismissIntent)
    manager(context).notify(ACTIVITY_TAG, ACTIVITY_ID, builder.build())
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
      // Notification timeouts were added in API 26. One inexact alarm also
      // expires cards on Android 7, including when the app process has exited.
      // No exact-alarm permission, foreground service or periodic work needed.
      val expiresAt = System.currentTimeMillis() + remainingMs
      context.getSharedPreferences(STORE, Context.MODE_PRIVATE).edit()
        .putLong("expiresAt", expiresAt).apply()
      context.getSystemService(
        AlarmManager::class.java
      ).setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, expiresAt, expiryIntent(context))
    }
  }

  private fun expiryIntent(context: Context): PendingIntent = PendingIntent.getBroadcast(
    context,
    ACTIVITY_ID,
    Intent(context, AgentActivityExpiryReceiver::class.java),
    PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
  )

  private fun cancelActivity(context: Context) {
    manager(context).cancel(ACTIVITY_TAG, ACTIVITY_ID)
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
      context.getSystemService(AlarmManager::class.java).cancel(expiryIntent(context))
      context.getSharedPreferences(STORE, Context.MODE_PRIVATE).edit().remove("expiresAt").apply()
    }
  }

  private fun manager(context: Context) = context.getSystemService(NotificationManager::class.java)

  private fun channels(context: Context) {
    if (Build.VERSION.SDK_INT >= 26) {
      manager(context).createNotificationChannels(
        listOf(
          NotificationChannel(ALERT_CHANNEL, "Agent alerts", NotificationManager.IMPORTANCE_HIGH),
          NotificationChannel(
            ACTIVITY_CHANNEL,
            "Ongoing agent activity",
            NotificationManager.IMPORTANCE_LOW
          ),
        )
      )
    }
  }

  private fun base(context: Context, channel: String): NotificationCompat.Builder =
    NotificationCompat.Builder(context, channel)
      .setPriority(
        if (channel ==
          ALERT_CHANNEL
        ) {
          NotificationCompat.PRIORITY_HIGH
        } else {
          NotificationCompat.PRIORITY_LOW
        }
      )
      .setDefaults(if (channel == ALERT_CHANNEL) Notification.DEFAULT_ALL else 0)
      .setSmallIcon(R.drawable.agent_activity_mark)
      .setVisibility(NotificationCompat.VISIBILITY_PRIVATE)
      .setShowWhen(false)

  private fun contentIntent(
    context: Context,
    scheme: String,
    path: String?,
    id: Int
  ): PendingIntent? {
    val threadPath = path?.takeIf { it.startsWith("/threads/") }
    val route = threadPath?.takeUnless { it.contains('?') || it.contains('#') } ?: "/"
    val intent = context.packageManager.getLaunchIntentForPackage(context.packageName)
      ?: return null
    intent.setAction(Intent.ACTION_VIEW).setData(Uri.parse("$scheme:/$route"))
      .addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP or Intent.FLAG_ACTIVITY_SINGLE_TOP)
    return PendingIntent.getActivity(
      context,
      id,
      intent,
      PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
    )
  }
}
