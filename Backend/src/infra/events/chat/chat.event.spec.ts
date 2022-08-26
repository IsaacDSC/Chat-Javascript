const io = require('socket.io-client');


const message = {
  name: 'IsaacDSC',
  room: 'test',
  message: 'Message test'
}


describe('testing events using in chat', () => {
  let client;

  beforeAll((done) => {
    client = io.connect('http://localhost:3333', {
      path: '/chat',
      transports: ['websocket'],
      query: { eventId: '/' },
    });
    done()
  })

  afterAll(() => {
    client.close();
  })

  it('connect service', (done) => {


    client.on('connect', () => {

      client.on('connected', (res) => {

        client.on('get_all_messages', (params) => {
          console.log({
            connect: params
          })

          expect(!!params).toBeTruthy();
        })
        console.log(res);
        client.emit('send_message', message);

        client.on('new_message', (params) => {
          console.log(params)
          client.disconnect();
          expect(!!params).toBeTruthy();
          done()
        })


      });

      client.on('error', (err) => {
        console.error(err)
        client.disconnect();
        expect(!!err).toBeTruthy();
        done()
      });
    });
  });

});