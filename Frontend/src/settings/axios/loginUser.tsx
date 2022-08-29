import axios from 'axios';

interface ILogin {
  username: string,
  password: string,
}

export async function LoginUser(user: ILogin) {
  const URL = 'http://localhost:3333/account/login';

  const { data, status } = await axios.post(URL, user);

  return { data, status };
}

export async function FindAllUser() {

}