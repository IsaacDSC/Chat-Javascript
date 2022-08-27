import axios from 'axios';

interface IUser {
  username: string,
  email: string,
  birthday: Date
}

export async function InsertUser(user: IUser) {
  const URL = 'http://localhost:3333/create/user';

  const { data, status } = await axios.post(URL, user);

  if (!!!data || status != 201) {
    console.log({ data, status })
    return null;
  }

  return data;
}

export async function FindAllUser(){

}