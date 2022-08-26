import express from 'express';
import { Express } from './express';
import { WebsocketServer } from './websocket';

const app = express();
const server = new Express(app).express;


export {
  server,
  WebsocketServer
};
