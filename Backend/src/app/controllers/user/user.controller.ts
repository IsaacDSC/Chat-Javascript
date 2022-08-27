import {
  Request,
  Response
} from 'express';

import {
  UserResolver
} from '../../services/user/user.resolver';


export class UserController {

  async createUser(req: Request, res: Response) {
    const resolver = new UserResolver();

    const { username, email, birthday } = req.body;

    if (!!!username.trim() || !!!email.trim() || !!!birthday.trim()) {
      return res.status(400).send({ message: 'lack of params' })
    }

    const user = await resolver.createUser(req.body);

    return res.status(201).send({ data: { user } });
  }

  async findAllUser(req: Request, res: Response) {
    const resolver = new UserResolver();

    const users = await resolver.findAllUser();

    return res.status(200).send({ data: { users } })

  }
}