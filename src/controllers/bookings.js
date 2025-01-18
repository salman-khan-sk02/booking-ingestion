const Booking = require("../models/Booking");
const { bookingSchema } = require("../utils/validators");

exports.createBooking = async (req, res) => {
  try {
    const { error } = bookingSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const normalizedDate = new Date(req.body.booking_date).toISOString();
    if (isNaN(new Date(normalizedDate).getTime())) {
      return res.status(400).json({ error: "Invalid date format" });
    }

    req.body.booking_date = normalizedDate;

    const newBooking = new Booking(req.body);
    await newBooking.save();
    res
      .status(201)
      .json({ message: "Booking created successfully", data: newBooking });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const { date, vendor } = req.query;
    const filters = {};

    // Filter by date if provided
    if (date) {
      filters.booking_date = {
        $gte: new Date(date),
        $lt: new Date(new Date(date).setDate(new Date(date).getDate() + 1)),
      };
    }

    // Filter by vendor name if provided
    if (vendor) {
      filters["vendor_details.vendor_name"] = new RegExp(vendor, "i"); // Ensure correct path for the vendor field
    }

    // Query the bookings with filters
    const bookings = await Booking.find(filters);

    // Return the matching bookings
    res.status(200).json(bookings);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: "Booking not found" });

    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Booking not found" });

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
