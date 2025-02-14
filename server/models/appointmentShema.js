// models/appointment.js
const mongoose = require("mongoose");

// Define the patient details schema
const patientDetailsSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
});

// Define the appointment schema
const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  bookingDateTime: { type: Date, default: Date.now },
  patientDetails: patientDetailsSchema,
});

module.exports = mongoose.model("Appointment", appointmentSchema);
