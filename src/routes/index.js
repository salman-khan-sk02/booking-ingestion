const express = require("express");
const authController = require("../controllers/auth");
const bookingController = require("../controllers/bookings");
const authenticate = require("../middleware/auth");

const router = express.Router();

// Auth Routes
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

// Booking Routes (protected)
router.post("/bookings", authenticate, bookingController.createBooking);
router.get("/bookings", authenticate, bookingController.getBookings);
router.get("/bookings/:id", authenticate, bookingController.getBookingById);
router.delete("/bookings/:id", authenticate, bookingController.deleteBooking);

module.exports = router;
