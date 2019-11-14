import '@babel/polyfill';
import * as http from 'http';
import dotenv from 'dotenv';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';

import router from './routes';
import { errorHandler, timeElapsed } from './middleware';

dotenv.config();

const createServer = async () => {
  const app = new Koa();
  app
    .use(timeElapsed)
    .use(errorHandler)
    .use(compress())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

  const server = http.createServer(app.callback());

  server.on('close', () => {
    console.log('Closed');
  });

  return server;
};

export default createServer;
