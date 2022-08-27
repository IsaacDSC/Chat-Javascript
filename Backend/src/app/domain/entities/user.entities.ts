import { randomUUID } from 'crypto';
import {
  IUser,
  IReturnUserEntity
} from './interfaces/user.interface';


export class UserEntities {
  registerUser(user: IUser): IReturnUserEntity {
    const { username, email, birthday } = user;
    return {
      id: randomUUID(),
      username,
      email,
      birthday,
      status: true,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    }
  }
}