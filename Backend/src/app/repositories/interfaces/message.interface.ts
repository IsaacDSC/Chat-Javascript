import { IChatEntities } from '../../domain/entities/interfaces/chat.interfaces';

export interface MethodsMessageRepository {
  create(data: IChatEntities): Promise<any>
  findAll(room: string): Promise<any>
}