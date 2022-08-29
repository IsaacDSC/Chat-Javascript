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

  private readonly entity = new UserEntities(
    new UserRepository()
  );

  async createUser(user: IUser) {
    const User = await this.entity.registerUser(user)

    if (User?.message) return User;

    const service = new UserService(
      new UserRepository()
    )

    const createdUser = await service.createUser(User)

    return { user: createdUser };
  }
  async findAllUser() {

    const service = new UserService(
      new UserRepository()
    )

    const users = await service.findAllUsers();

    return users;
  }
  async findUser(username: string) {

    const service = new UserService(
      new UserRepository()
    )

    const users = await service.findUser(username);

    return users;
  }
}