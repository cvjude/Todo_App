/* eslint-disable no-return-assign */
import express from 'express';
import 'express-async-errors';
import { createTodo, getAllTodos, updateTodo } from '../../controllers/todo';
import middlewares from '../../middlewares';

const { validate, createTodoSchema, updateTodoSchema } = middlewares;

const todoRoutes = express();

todoRoutes.get('/all', getAllTodos);
todoRoutes.post('/', validate(createTodoSchema), createTodo);
todoRoutes.patch('/update/:id', validate(updateTodoSchema), updateTodo);

export default todoRoutes;
