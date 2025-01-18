const Joi = require("joi");

const vendorDetailsSchema = Joi.object({
  vendor_name: Joi.string().required(),
  vendor_id: Joi.string().required(),
  contact: Joi.string(),
  address: Joi.string(),
  // Any other vendor-specific fields can be added here
});

const bookingSchema = Joi.object({
  booking_id: Joi.string().required(),
  customer_name: Joi.string().required(),
  booking_date: Joi.date().required(),
  amount: Joi.number().required(),
  vendor_details: vendorDetailsSchema.required(), // Updated to handle vendor details object
});

module.exports = { bookingSchema };
