import chalk from 'chalk';
import http from 'http';
import { config } from 'dotenv';
import app from './server';

config();

const { PORT } = process.env;

const port = PORT || 4000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port ${chalk.yellow(port)}`);
});

export default { app };
