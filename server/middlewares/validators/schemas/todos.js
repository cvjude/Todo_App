/* eslint-disable newline-per-chained-call */
import Joi from '@hapi/joi';

export const createTodoSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string(),
  completed: Joi.boolean(),
});

export const updateTodoSchema = Joi.object({
  id: Joi.string().uuid(),
  completed: Joi.boolean(),
});
