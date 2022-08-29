import {
  Request,
  Response
} from 'express';

import {
  AccountResolver
} from '../../services/account/account.resolver';

export class AccountController {
  async login(req: Request, res: Response) {
    const {username, password} = req.body;

    const resolver = new AccountResolver();

    const { message, token, user } = await resolver.login({username, password});

    if (message) return res.status(200).send({ message });

    return res.status(200).send({ token, user });

  }
}