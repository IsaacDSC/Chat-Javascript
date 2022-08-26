export interface IChatEntities {
  message: string;
  name: string;
  room: string;
}

export interface IReturnChatEntities {
  id?: string;
  message?: string;
  name?: string;
  room?: string;
  createdAt?: string;
  updatedAt?: string;
  error?: string;
  params?: string[];
}

export interface sendMessageChat {
  id: string;
  message: string;
  name: string;
  room: string;
  createdAt: string;
  updatedAt: string;
}


