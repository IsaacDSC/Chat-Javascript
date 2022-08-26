import { server as app, WebsocketServer } from './config/server';

const server = require('http').createServer(app);

const socket = new WebsocketServer(server);
app.set('/chat', socket.socketChat());

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});



