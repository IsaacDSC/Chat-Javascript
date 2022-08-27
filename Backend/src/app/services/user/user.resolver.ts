import {
  IUser
} from '../../domain/entities/interfaces/user.interface';
import {
  UserEntities
} from '../../domain/entities/user.entities';
import {
  UserRepository
} from '../../repositories/user.repository';
import {
  UserService
} from './user.service';

export class UserResolver {
  async createUser(user: IUser) {
    const User = new UserEntities().registerUser(user)

    if (!User) return { Error: 'Not Content' }

    const service = new UserService(
      new UserRepository()
    )

    const createdUser = await service.createUser(User)

    return createdUser;
  }
  async findAllUser() {

    const service = new UserService(
      new UserRepository()
    )

    const users = await service.findAllUsers();

    return users;
  }
}