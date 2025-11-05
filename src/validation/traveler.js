import Joi from 'joi';

export const travelerSchema = Joi.object({
  name: Joi.string().max(32).required(),
  email: Joi.string().email().max(64).trim().lowercase().required(),
  avatar: Joi.binary()
    .max(500 * 1024)
    .required(),
  description: Joi.string().max(150).required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  phoneNumber: Joi.string().min(10).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
