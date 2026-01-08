const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  roomType: String,
  days: Number,
  totalCost: Number
});

module.exports = mongoose.model("Booking", bookingSchema);
