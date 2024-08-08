const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialty: { type: String },
  image: String,
  description: String,
  workExperience: Number,
  Lat: Number,
  Long: Number,
  location: { type: { type: String }, coordinates: [Number] },
  clinicName: String,
  numberOfPatientsViewed: Number,
  experience: Number,
  rating: Number,
  reviewCount: Number,
  availableDateTimeSlots: [String],
});

DoctorSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Doctor", DoctorSchema);
