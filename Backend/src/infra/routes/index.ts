import express, { Request, Response } from 'express';
const router = express.Router();

import {
  UserController
} from '../../app/controllers/user/user.controller';

router.get('/', (req: Request, res: Response) => {
  res.status(200).send({ service: true });
})

const controllerUser = new UserController();
router.post('/create/user', controllerUser.createUser);
router.get('/find/users', controllerUser.findAllUser);

export default router;