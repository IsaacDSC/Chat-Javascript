import {
  IReturnUserEntity,
  IUser
} from '../../domain/entities/interfaces/user.interface';
import {
  AccountsEntity
} from '../../domain/entities/accounts.entities';
import {
  UserRepository
} from '../../repositories/user.repository';
import {
  AccountService
} from './account.service';
import {
  Crypt
} from '../../helpers';


interface IReturnLoginResolver {
  message?: string;
  token?: string;
  user?: IUser;
}

export class AccountResolver {
  async login(login: IReturnUserEntity): Promise<IReturnLoginResolver> {

    const { username, password } = login;

    if (!username || !password) return { message: 'Lack of params' }

    const service = new AccountService(
      new UserRepository(),
      new Crypt()
    );

    const user = await service.login(username)

    if (!user) return { message: 'If user has ben registered, Login or Password do not match.' }

    const entity = new AccountsEntity();

    const logged = await entity.login({ username, password }, user)

    if (!logged) {
      return { message: 'If user has ben registered, Login or Password do not match.' }
    }

    const token = await service.jwtGenerator(user?.id);

    return {
      token,
      user
    }

  }
}
