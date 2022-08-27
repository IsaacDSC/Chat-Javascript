
export interface IUser {
  username: string;
  email: string;
  birthday: Date
}

export interface IReturnUserEntity{
  id: string;
  username: string;
  email: string;
  birthday: Date;
  status: boolean;
  updatedAt: string;
  createdAt: string;
}