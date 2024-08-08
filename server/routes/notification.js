const {
  scheduleNotification,
  updateNotificationStatus,
  getUserNotifications,
  deleteNotification,
} = require("../controllers/notificationController");

// Schedule a notification
router.post("/schedule", scheduleNotification);

// Update notification status
router.post("/update", updateNotificationStatus);

// Get all notifications for a user
router.get("/:userId", getUserNotifications);

// Delete a notification
router.delete("/:notificationId", deleteNotification);

module.exports = router;
