const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  booking_id: { type: String, required: true, unique: true },
  customer_name: { type: String, required: true },
  booking_date: { type: Date, required: true },
  amount: { type: Number, required: true },
  vendor_name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", bookingSchema);
