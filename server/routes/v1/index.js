import express from 'express';
import 'express-async-errors';
import todos from './todos';

const router = express.Router();

router.use('/todos', todos);

export default router;
