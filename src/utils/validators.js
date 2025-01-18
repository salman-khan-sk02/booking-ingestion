const Joi = require("joi");

const vendorDetailsSchema = Joi.object({
  vendor_name: Joi.string().required(),
  vendor_id: Joi.string().required(),
  contact: Joi.string(),
  address: Joi.string(),
});

const bookingSchema = Joi.object({
  customer_name: Joi.string().required(),
  booking_date: Joi.date().required(),
  amount: Joi.number().required(),
  vendor_details: vendorDetailsSchema.required(),
});

module.exports = { bookingSchema }; // Exporting the object containing bookingSchema
