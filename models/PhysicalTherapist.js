const mongoose = require("mongoose");

const physicalTherapistSchema = new mongoose.Schema({
  physicalTherapistName: { type: String, required: true },
  ownerName: { type: String, required: true },
  photo: { type: String },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  videoUrl: { type: String },
  practicesImages: { type: [String], required: true },
  location: {
    type: {
      type: String, // 'Point'
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
  headline: { type: String, required: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String },
  activated: { type: Boolean, default: true },
});

module.exports = mongoose.model("PhysicalTherapist", physicalTherapistSchema);
