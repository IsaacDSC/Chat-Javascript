import axios from 'axios';
import { randomUUID } from 'crypto';

const UserNameEmail = randomUUID();

describe('testing end2end use case User', () => {
  const url = 'http://localhost:3333';

  it('expect register user in database', async () => {
    const path = '/create/user';

    const body = {
      username: UserNameEmail,
      email: UserNameEmail + '@gmail.com',
      birthday: '1997/06/12',
      password: 'secret'
    }

    const { data, status } = await axios.post(`${url}${path}`, body);

    expect(status).toBe(201);
    expect(!!data).toBeTruthy();
    expect(data?.data?.message).toBeUndefined();
    expect(!!data?.data?.user).toBeTruthy();

  });

  it('expect the user already exist in database', async () => {

    const path = '/create/user';

    const body = {
      username: UserNameEmail,
      email: UserNameEmail + '@gmail.com',
      birthday: '1997/06/12',
      password: 'secret'
    }

    const { data, status } = await axios.post(`${url}${path}`, body);

    expect(status).toBe(202);
    console.log({ data, status });
    expect(!!data.message).toBeTruthy();
    expect(data.data.username).toBe(body.username);
    expect(data.data.email).toBe(body.email);
    expect(data.data.birthday).toBe(body.birthday);
    expect(!!data.data.password).toBeTruthy();
  });

  it('expect find all users in database', async () => {
    const path = '/find/users';

    const { data, status } = await axios.get(`${url}${path}`);

    console.log(data?.data?.users);
    expect(status).toBe(200);
    expect(!!data).toBeTruthy();
    expect(data?.data?.message).toBeUndefined();
    expect(typeof data?.data?.users).toBe('object');
  });

  it('expect find user in database by username', async () => {
    const path = '/find/user';

    const { data, status } = await axios.get(`${url}${path}/IsaacDSC`);

    console.log(data?.data?.users);
    expect(status).toBe(200);
    expect(!!data).toBeTruthy();
    expect(data?.data?.message).toBeUndefined();
    expect(typeof data?.data?.users).toBe('object');
  });

  it('expect success login user', async () => {
    const path = '/account/login';

    const login = {
      username: 'IsaacDSC',
      password: 'secret'
    };

    const { data, status } = await axios.post(`${url}${path}`, login);

    console.log(data);
    expect(status).toBe(200);

  })

  it.only('expect login witch user not exist', async () => {
    const path = '/account/login';

    const login = {
      username: 'hahaha',
      password: '123'
    };

    const { data, status } = await axios.post(`${url}${path}`, login);

    console.log(data);
    expect(status).toBe(200);
    expect(!!data?.message).toBeTruthy();

  })

});