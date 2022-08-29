import {
  Crypt
} from '../../helpers';
import {
  IUser,
  IReturnUserEntity
} from './interfaces/user.interface';
import {
  IMethodsUser
} from '../../repositories/interfaces/user.repository';
export class UserEntities {

  constructor(
    private readonly repository: IMethodsUser
  ) {
    this.repository = repository;
  }

  async registerUser(user: IUser): Promise<IReturnUserEntity> {
    const { username, email, birthday, password } = user;

    const existUser = await this.repository.findByUsername(username)

    if (existUser) {
      return { message: 'user already exist', user: existUser };
    }

    return {
      username,
      email,
      password: new Crypt().generateHash(password),
      birthday,
      status: true,
    }
  }
}