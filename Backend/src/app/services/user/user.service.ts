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
    const User = await this.repository.create(user);
    return User;
  }

  async findAllUsers() {
    const users = await  this.repository.findAll();
    return users;
  }

  async findUser(username: string){
    const users = await this.repository.findByUsername(username);
    return users;
  }
}