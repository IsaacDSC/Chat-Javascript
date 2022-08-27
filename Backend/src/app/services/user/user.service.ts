import {
  IReturnUserEntity
} from '../../domain/entities/interfaces/user.interface';
import {
  IMethodsUser
} from '../../repositories/interfaces/user.repository';

export class UserService {
  constructor(
    private readonly repository: IMethodsUser
  ) {
    this.repository = repository;
  }

  async createUser(user: IReturnUserEntity) {
    const User = this.repository.create(user);
    return User;
  }

  async findAllUsers() {
    const users = this.repository.findAll();
    return users;
  }
}