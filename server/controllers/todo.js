import models from '../database/models';
import helpers from '../helpers';

// const userRepository = new dbRepository(models.User);
const { successStat, errorStat } = helpers;

/**
 * / @static
 * @description Allows a user to create a todo
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} object containing user created todo
 * @memberof TodoController
 */
export const createTodo = async (req, res) => {
  const todo = await models.Todos.create({
    ...req.body.validated,
  });

  return successStat(res, 201, 'data', todo);
};

/**
 * / @static
 * @description Allows a user to getAll Todos
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} object containing user created todo
 * @memberof TodoController
 */
export const getAllTodos = async (req, res) => {
  const todos = await models.Todos.findAll();

  return successStat(res, 201, 'data', todos);
};

/**
 * / @static
 * @description Allows a user to update Todos
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} object containing user created todo
 * @memberof TodoController
 */
export const updateTodo = async (req, res) => {
  const { id } = req.body.validated;

  const todo = await models.Todos.findOne({
    where: { id },
  });

  todo.update(req.body.validated);

  return successStat(res, 201, 'data', todo);
};
