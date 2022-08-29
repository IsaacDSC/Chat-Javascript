
export interface IUser {
  id?: string;
  username: string;
  email: string;
  birthday: string;
  password: string;
  status?: boolean;
}

export type IReturnUserEntity = {
  username?: string;
  email?: string;
  birthday?: string;
  password?: string;
  status?: boolean;
  message?: string;
  user?: IUser
};