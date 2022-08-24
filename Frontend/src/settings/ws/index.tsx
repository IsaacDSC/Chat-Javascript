import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";

const client = io(process.env.IP_CHAT ?? '', {
  path: '/chat',
  transports: ['websocket'],
  auth: {
    accessToken: process.env.TOKEN,
    secretToken: process.env.SECRET,
  },
  query: { eventId: 'room' },
});


export function SendMessage(msg: string) {
  client.on('connected', (socket) => {
    socket.emit('send_message', msg)
  })
}

const [count, setCount] = useState(0);
useEffect(() => {
  document.title = `Você clicou ${count} vezes`;
});

export function ChatConnection() {
  client.on('connected', (socket) => {
    socket.on('new_message', (msg: any) => {
      setCount(msg)
    })
  })
}