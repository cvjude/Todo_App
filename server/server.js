import express from 'express';
import 'express-async-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import chalk from 'chalk';
import cors from 'cors';
import { config } from 'dotenv';
import path from 'path';
import Routes from './routes/v1';
import db from './database/models';

config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../site/build')));

app.get('/api/v1', (req, res) =>
  res.status(200).json({
    message: 'Welcome to the Todos App',
  })
);

// Routes(app);
app.use('/api/v1', Routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../site/build', 'index.html'));
});

// to catch a 404 and send to error handler
app.use((req, res) =>
  res.status(404).json({
    status: 404,
    error: `Route ${req.url} Not found`,
  })
);

const { sequelize } = db;

sequelize
  .authenticate()
  .then(() => {
    console.log('Sequelize connection was successful');
  })
  .catch((err) => {
    console.log(chalk.yellow(err.message));
  });

// app error handler, to handle sync and asyc errors
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (res.headersSent) return next(err);

  console.log(err);
  return res.status(err.status || 500).json({
    status: res.statusCode,
    error: err.message,
  });
});

export default app;
