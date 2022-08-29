import { prisma } from '../../config/prisma';
import {
  IMethodsUser
} from './interfaces/user.repository';
import {
  IReturnUserEntity,
} from '../domain/entities/interfaces/user.interface';

export class UserRepository
  implements IMethodsUser {
  private table = prisma.users;

  async create(user: IReturnUserEntity) {
    const { username, email, birthday, password } = user;

    const User = await this.table.create({
      data: {
        username,
        email,
        birthday,
        password
      }
    });

    return User;
  }

  async findAll() {
    return await this.table.findMany();
  }

  async findByUsername(username: string) {
    const user = await this.table.findUnique({
      where: { username }
    })

    return user;
  }
}