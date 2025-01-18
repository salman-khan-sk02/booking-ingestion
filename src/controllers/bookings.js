const Booking = require("../models/Booking");
const { bookingSchema } = require("../utils/validators");

const createBooking = async (req, res) => {
  try {
    const { error } = bookingSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const { date, vendor } = req.query;
    const filter = {};
    if (date) filter.booking_date = { $eq: new Date(date) };
    if (vendor) filter.vendor_name = vendor;

    const bookings = await Booking.find(filter);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    res.json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBooking, getBookings, getBookingById, deleteBooking };
