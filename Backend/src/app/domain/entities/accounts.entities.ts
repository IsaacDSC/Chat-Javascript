import {
  Crypt
} from '../../helpers';

import {
  IUser
} from './interfaces/user.interface';

interface ILogin {
  username: string;
  password: string;
}

const crypt = new Crypt();
export class AccountsEntity {

  async login(account: ILogin, user: IUser): Promise<boolean> {
    const { password } = account;
    const isLogged:boolean = await crypt.compareHash(password, user?.password);
    return isLogged;
  }
}