import {
  IMethodsUser
} from '../../repositories/interfaces/user.repository';
import {
  Crypt
} from '../../helpers';

export class AccountService {

  constructor(
    private readonly repository: IMethodsUser,
    private readonly crypt: Crypt
  ) {
    this.repository = repository;
    this.crypt = crypt;
  }

  async login(username: string) {
    const user = await this.repository.findByUsername(username)
    return user;
  }

  async jwtGenerator(userId: string) {
    const token = await this.crypt.generateToken(userId);
    return token;
  }

}