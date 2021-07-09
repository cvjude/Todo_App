import validate from './validators';

import { createTodoSchema, updateTodoSchema } from './validators/schemas/todos';

export default {
  validate,
  createTodoSchema,
  updateTodoSchema,
};
