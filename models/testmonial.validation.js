const { Joi } = require("express-validation");

const testimonial = {
  body: Joi.object({
    name: Joi.string().required(),
    photo: Joi.string().required(),
    post: Joi.string().required(),
    description: Joi.string().required(),
  }),
};

const update = {
  body: Joi.object({
    name: Joi.string().required(),
    post: Joi.string().required(),
    description: Joi.string().required(),
    active: Joi.number().required(),
  }),
};

const deletetestimonial = {
  body: Joi.object({
    active: Joi.number().required(),
  }),
};

exports.createTestimonial = testimonial;
exports.updateTestimonial = update;
exports.deletetestimonial = deletetestimonial;
