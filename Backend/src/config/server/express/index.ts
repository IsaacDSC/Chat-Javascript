import express from 'express';
import cors from 'cors';
import routes from '../../../infra/routes';

require('dotenv').config();

export class Express {
  constructor(
    readonly express: express.Application,
  ) {
    this.Cors();
    this.Middlewares();
    this.Routes();
  }
  private Cors(): void {
    this.express.use(cors());
  }
  private Middlewares(): void {
    this.express.use(express.json());
  }
  private Routes(): void {
    this.express.use(routes);
  }
}