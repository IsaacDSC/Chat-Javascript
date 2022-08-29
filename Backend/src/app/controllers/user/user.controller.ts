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

    const { username, email, birthday, password } = req.body;

    if (!!!username || !!!email || !!!birthday || !!!password) {
      return res.status(400).send({ message: 'lack of params' })
    }

    const { user, message } = await resolver.createUser(req.body);

    if (message) {
      return res.status(202).send({ data: { user }, message });
    }

    return res.status(201).send({ data: { user }, message: null });
  }

  async findAllUser(req: Request, res: Response) {
    const resolver = new UserResolver();

    const users = await resolver.findAllUser();

    return res.status(200).send({ data: { users } })

  }

  async findUser(req: Request, res: Response) {
    const { username } = req.params;

    const resolver = new UserResolver();

    const users = await resolver.findUser(username);

    return res.status(200).send({ data: { users } })
  }
}