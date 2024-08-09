const Notification = require("../models/notification");
const addNotificationJob = require("../scheduler.js");

// Add a new notification
exports.addNotification = async (req, res) => {const { userId, msg } = req.body;
  try {
    const notification = new Notification({
      user_id: userId,
      msg: msg,
      seen: false,
    });

    await notification.save();
    res
      .status(200)
      .json({ message: "Notification added and pushed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add notification" });
  }};

// Schedule a notification
exports.scheduleNotification = async (req, res) => {
   const { userId, msg, delayInMinutes = 0 } = req.body;

  try {
    await addNotificationJob(userId, msg, delayInMinutes);
    res.status(200).json({ message: "Notification passed for verification" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to schedule notification" });
  }
};

// Update notification status
exports.updateNotificationStatus = async (req, res) => {};

// Get all notifications for a user
exports.getUserNotifications = async (req, res) => {};

// Delete a notification
exports.deleteNotification = async (req, res) => {};
