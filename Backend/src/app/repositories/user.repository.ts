import { IMethodsUser } from './interfaces/user.repository';

const table = [];
export class UserRepository
  implements IMethodsUser {

  async create(user) {
    table.push(user);
    return user;
  }
  async findAll() {
    return table;
  }
}