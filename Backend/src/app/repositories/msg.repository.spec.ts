import { MessagesRepository } from './messages.repository';

const repository = new MessagesRepository();

describe('testing repository message', () => {
  const Room: string = 'principal';

  it('expect the create message in repository', async () => {
    repository.create({
      message: 'olá',
      name: 'IsaacDSC',
      room: Room,
      userId: ''
    });

    repository.create({
      message: 'olá',
      name: 'IsaacDSC',
      room: 'Room',
      userId: ''
    });
  });


  it('expect filter message room', async () => {
    const messages = await repository.findAll(Room);

    console.log(messages)
    expect(!!messages).toBeTruthy();
  });

});