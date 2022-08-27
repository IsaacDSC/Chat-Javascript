import axios from 'axios';

describe('testing end2end use case User', () => {
  const url = 'http://localhost:3333';

  it('expect register user in database', async () => {
    const path = '/create/user';

    const body = {
      username: 'IsaacDSC',
      email: 'testing@gmail.com',
      birthday: '1997/06/12'
    }

    const { data, status } = await axios.post(`${url}${path}`, body);

    console.log(data);
    expect(status).toBe(201);
    expect(!!data).toBeTruthy();
    expect(data?.data?.message).toBeUndefined();
    expect(!!data?.data?.user).toBeTruthy();
  });

  it('expect register user in database', async () => {
    const path = '/find/users';

    const { data, status } = await axios.get(`${url}${path}`);

    console.log(data?.data?.users);
    expect(status).toBe(200);
    expect(!!data).toBeTruthy();
    expect(data?.data?.message).toBeUndefined();
    expect(typeof data?.data?.users).toBe('object');
  });

});