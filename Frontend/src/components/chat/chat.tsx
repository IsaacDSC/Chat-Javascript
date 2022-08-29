import React, { useEffect, useState } from 'react';
import io from 'socket.io-client'
import {
  ModalChatLogin,
  ModalRegisterUser
} from '../subcomponents';

import './chat.sytle.css'

const Room: any = !window.location.search.match(/room=(.*)/) ?
  window.location.pathname : window.location.search.match(/room=(.*)/)

const socket = io('http://localhost:3333', {
  path: '/chat',
  transports: ['websocket'],
  auth: {
    accessToken: import.meta.env.TOKEN,
    secretToken: import.meta.env.SECRET,
  },
  query: {
    eventId: !Room[1] ? 'principal' : Room[1]
  },
})


socket.on('connect', () => console.log('Connected !!!'))

export function Chat() {

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

    const { message }: any = values
    socket.emit('send_message', { name: user?.username, message })
    document.querySelector('#msg').value = null

  }

  socket.on('broadcast_message', (msg) => {
    const data = [...messages]
    data.pop();
    data.push(msg)
    setMessages(data)
    // console.log('new_message', msg, user)
  })

  return (
    <>
      <ModalRegisterUser userState={setUser}></ModalRegisterUser>
      <ModalChatLogin userState={setUser}></ModalChatLogin>

      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-6" id='card-init'>
              <div className="card card-bordered" id='card-chat'>
                <div className="card-header">
                  <h4 className="card-title"><strong>Chat</strong></h4>
                  <a className="btn btn-xs btn-secondary" href="#" data-abc="true">Sala: {Room == '/' ? 'Principal' : Room[1] == '/' ? 'Principal' : Room[1]}</a>
                </div>


                <div className="ps-container ps-theme-default ps-active-y" id="chat-content">
                  {
                    messages.map((msg: any) => (
                      user?.username != msg.username ?
                        <div className="media media-chat" key={msg.id}>
                          <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                          <div className="media-body">
                            <p><small>{msg.username}</small>: {msg.message}</p>
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
                            <p><small>{msg.username}</small>: {msg.message}</p>
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
                  {!!user == false ?
                    <>
                      <span className="publisher-btn file-group">
                        <div className="row">
                          <div className="col">
                            <button className='btn btn-light col-12' type='button' data-toggle="modal" data-target="#modalChatLogin">Login</button>
                          </div>
                          <div className="col">
                            <button className='btn btn-light col-12' type='button' data-toggle="modal" data-target="#modalChatRegister">Registrar</button>
                          </div>
                        </div>
                      </span>
                    </> :

                    <>

                      <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                      <input className="publisher-input" name='message' id='msg' type="text" placeholder="Didige sua Mensagem ... " onChange={onChange} />
                      <span className="publisher-btn file-group">
                        <button className='btn btn-light' type='button' onClick={SendMessage} onKeyPress={SendMessage}>
                          Enviar
                        </button>
                      </span>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

