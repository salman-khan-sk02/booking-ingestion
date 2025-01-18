const mongoose = require("mongoose");

const vendorDetailsSchema = new mongoose.Schema({
  vendor_name: {
    type: String,
    required: true,
  },
  vendor_id: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  // Add any other relevant vendor details here
});

const bookingSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: true,
  },
  booking_date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  vendor_details: {
    // Now an object containing various vendor attributes
    type: vendorDetailsSchema,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
