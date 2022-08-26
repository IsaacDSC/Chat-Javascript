import { IChatEntities } from '../domain/entities/interfaces/chat.interfaces';
import {
  MethodsMessageRepository
} from './interfaces/message.interface';

const database = [];

export class MessagesRepository
  implements MethodsMessageRepository {
  constructor() { }

  async findAll() {
    return database;
  }
  async create(data: IChatEntities) {
    database.push(data);
    return data;
  }
  async updated() { }
  async delete() { }
}