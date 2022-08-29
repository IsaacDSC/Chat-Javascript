import { UserRepository } from './user.repository';
import { Crypt } from '../helpers';

const repository = new UserRepository();

describe('testing repository users', () => {

  it('expect create user', async () => {
    const user = await repository.create({
      email: 'isaac8.silva@hotmail.com',
      username: 'IsaacDSC',
      birthday: '1997/06/12',
      password: await new Crypt().generateHash('secret')
    })

    console.log(user);
    expect(!!user).toBeTruthy();
  })

  it('expect return users', async () => {
    const users = await repository.findAll();

    console.log(users);
    expect(!!users).toBeTruthy();
  })

  it('expect return filter user', async () => {
    const user = await repository.findUser('IsaacDSC');

    console.log(user);
    expect(!!user).toBeTruthy();
  })

});