import Joi from "joi";

export const createCommentSchema = Joi.object({
  email: Joi.string().email().required(),
  body: Joi.string().required(),
  replyToId: Joi.number().optional().allow("null"),
});

export const updateCommentSchema = Joi.object({
  body: Joi.string().required(),
});
