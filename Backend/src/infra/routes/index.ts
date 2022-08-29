import express, { Request, Response } from 'express';
const router = express.Router();

import {
  UserController
} from '../../app/controllers/user/user.controller';
import {
 AccountController
} from '../../app/controllers/account/account.controller';

router.get('/', (req: Request, res: Response) => {
  res.status(200).send({ service: true });
})

const controllerUser = new UserController();
router.post('/create/user', controllerUser.createUser);
router.get('/find/users', controllerUser.findAllUser);
router.get('/find/user/:username', controllerUser.findUser);

const controllerAccount  = new AccountController();
router.post('/account/login', controllerAccount.login);

export default router;