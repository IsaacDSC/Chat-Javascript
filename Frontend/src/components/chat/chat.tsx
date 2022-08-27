import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'
import {
  ModalChatLogin
} from '../subcomponents';

import './chat.sytle.css'

const socket = io('http://localhost:3333', {
  path: '/chat',
  transports: ['websocket'],
  auth: {
    accessToken: import.meta.env.TOKEN,
    secretToken: import.meta.env.SECRET,
  },
  query: { eventId: 'room' },
})

socket.on('connect', () => console.log('Connected !!!'))

export function Chat() {
  const path = window.location.pathname;
  const [values, setValues] = useState({})
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState(null)

  socket.on('get_all_messages', (msg) => {
    setMessages(msg);
  })

  function onChange(ev: any) {
    setValues({ ...values, [ev.target.name]: ev.target.value })
  }

  function SendMessage() {

    const path = window.location.pathname;
    const { message }: any = values

    socket.emit('send_message', { name: user?.username, room: path, message })

    socket.on('new_message', (msg) => {
      const data = [...messages]
      data.push(msg)
      setMessages(data)
      console.log('new_message', msg, user)
    })

    socket.on('broadcast_message', (msg) => {
      console.log(msg)
      const data = [...messages]
      data.push(msg)
      setMessages(data)
      console.log('new_message', msg, user)
    })

  }

  return (
    <>
      <ModalChatLogin userState={setUser}></ModalChatLogin>

      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-6" id='card-init'>
              <div className="card card-bordered" id='card-chat'>
                <div className="card-header">
                  <h4 className="card-title"><strong>Chat</strong></h4>
                  <a className="btn btn-xs btn-secondary" href="#" data-abc="true">Bate-Papo: {path == '/' ? 'Principal' : path}</a>
                </div>


                <div className="ps-container ps-theme-default ps-active-y" id="chat-content">
                  {
                    messages.map((msg: any) => (
                      user?.username != msg.name ?
                        <div className="media media-chat" key={msg.id}>
                          <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                          <div className="media-body">
                            <p><small>{msg.name}</small>: {msg.message}</p>
                            <p className="meta">
                              <time>
                                {
                                  `${new Date(msg.createdAt).getHours()}:${new Date(msg.createdAt).getMinutes()}`
                                }
                              </time>
                            </p>
                          </div>
                        </div>
                        :
                        <div className="media media-chat media-chat-reverse" key={msg.id}>
                          <div className="media-body">
                            <p><small>{msg.name}</small>: {msg.message}</p>
                            <p className="meta">
                              <time>
                                {
                                  `${new Date(msg.createdAt).getHours()}:${new Date(msg.createdAt).getMinutes()}`
                                }
                              </time>
                            </p>
                          </div>
                        </div>
                    ))
                  }

                  <div className="ps-scrollbar-x-rail">
                    <div className="ps-scrollbar-x" ></div>
                  </div>
                  <div className="ps-scrollbar-y-rail"><div className="ps-scrollbar-y" ></div>
                  </div>
                </div>

                <div className="publisher bt-1 border-light" id='publisher'>
                  <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                  <input className="publisher-input" name='message' type="text" placeholder="Didige sua Mensagem ... " onChange={onChange} />
                  <span className="publisher-btn file-group">
                  {
                    !!user == false ?
                      <button className='btn btn-light' type='button' data-toggle="modal" data-target="#modalChatLogin">Login</button>
                      : <button className='btn btn-light' type='button' onClick={SendMessage} onKeyPress={SendMessage}>
                        Enviar
                      </button>
                  }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

