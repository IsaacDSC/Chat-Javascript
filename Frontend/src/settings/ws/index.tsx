import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocketWear = (liveId: string, isPip: boolean) => {
  const socket = useRef<Socket>();


  useEffect(() => {

    socket.current = io(import.meta.env.API_CHAT ?? '', {
      path: '/chat',
      transports: ['websocket'],
      auth: {
        accessToken: import.meta.env.TOKEN,
        secretToken: import.meta.env.SECRET,
      },
      query: { eventId: 'room' },
    });

    socket.current?.on('connect', () => {
      socket.current?.on('new_message', () => {
        // refetch();
      });
    });

    return () => {
      socket.current?.close();
    };

  }, [liveId, isPip]);

  return null;
};

// const client = io(import.meta.env.API_CHAT ?? '', {
//   path: '/chat',
//   transports: ['websocket'],
//   auth: {
//     accessToken: import.meta.env.TOKEN,
//     secretToken: import.meta.env.SECRET,
//   },
//   query: { eventId: 'room' },
// });


// client.on('new_message', (msg)=>{
//   console.log({msg})
// })
// export function sendMessageChat(msg: any) {
//   client.on('connected', (socket) => {
//     socket.emit('send_message', msg)
//   })
//   client.on('new_message', (msg)=>{
//     console.log({msg})
//   })
// }

// const [count, setCount] = useState(0);
// useEffect(() => {
//   document.title = `Você clicou ${count} vezes`;
// });

// export function ChatConnection() {
//   client.on('connected', (socket) => {
//     socket.on('new_message', (msg: any) => {
//       setCount(msg)
//     })
//   })
// }