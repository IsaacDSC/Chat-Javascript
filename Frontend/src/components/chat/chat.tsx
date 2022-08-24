import React, { useEffect, useState } from 'react';

import './chat.sytle.css'


export function Chat() {

  const [values, setValues] = useState({})

  function onChange(ev: any) {
    setValues({ ...values, [ev.target.name]: ev.target.value })
  }

  function SendMessage() {
    var url_atual = window.location.href;
    const path = window.location.pathname;
    const { message }: any = values
    console.log({message, path, url_atual})
  }

  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card card-bordered" id='card-chat'>
                <div className="card-header">
                  <h4 className="card-title"><strong>Chat</strong></h4>
                  <a className="btn btn-xs btn-secondary" href="#" data-abc="true">Let's Chat App</a>
                </div>


                <div className="ps-container ps-theme-default ps-active-y" id="chat-content">
                  <div className="media media-chat">
                    <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                    <div className="media-body">
                      <p>Hi</p>
                      <p>How are you ...???</p>
                      <p>What are you doing tomorrow?<br /> Can we come up a bar?</p>
                      <p className="meta"><time>23:58</time></p>
                    </div>
                  </div>

                  <div className="media media-meta-day">Today</div>

                  <div className="media media-chat media-chat-reverse">
                    <div className="media-body">
                      <p>Hiii, I'm good.</p>
                      <p>How are you doing?</p>
                      <p>Long time no see! Tomorrow office. will be free on sunday.</p>
                      <p className="meta"><time>00:06</time></p>
                    </div>
                  </div>

                  <div className="media media-chat">
                    <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                    <div className="media-body">
                      <p>Okay</p>
                      <p>We will go on sunday? </p>
                      <p className="meta"><time>00:07</time></p>
                    </div>
                  </div>

                  <div className="media media-chat media-chat-reverse">
                    <div className="media-body">
                      <p>That's awesome!</p>
                      <p>I will meet you Sandon Square sharp at 10 AM</p>
                      <p>Is that okay?</p>
                      <p className="meta"><time>00:09</time></p>
                    </div>
                  </div>

                  <div className="media media-chat">
                    <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                    <div className="media-body">
                      <p>Okay i will meet you on Sandon Square </p>
                      <p className="meta"><time>00:10</time></p>
                    </div>
                  </div>

                  <div className="media media-chat media-chat-reverse">
                    <div className="media-body">
                      <p>Do you have pictures of Matley Marriage?</p>
                      <p className="meta"><time>00:10</time></p>
                    </div>
                  </div>

                  <div className="media media-chat">
                    <img className="avatar" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                    <div className="media-body">
                      <p>Sorry I don't have. i changed my phone.</p>
                      <p className="meta"><time>00:12</time></p>
                    </div>
                  </div>

                  <div className="media media-chat media-chat-reverse">
                    <div className="media-body">
                      <p>Okay then see you on sunday!!</p>
                      <p className="meta"><time>00:12</time></p>
                    </div>
                  </div>

                  <div className="ps-scrollbar-x-rail">
                    <div className="ps-scrollbar-x" ></div>
                  </div>
                  <div className="ps-scrollbar-y-rail"><div className="ps-scrollbar-y" ></div>
                  </div>
                </div>

                <div className="publisher bt-1 border-light">
                  <img className="avatar avatar-xs" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="..." />
                  <input className="publisher-input" name='message' type="text" placeholder="Didige sua Mensagem ... " onChange={onChange} />
                  <span className="publisher-btn file-group">
                    <i className="fa fa-paperclip file-browser"></i>
                    <input type="file" />
                  </span>
                  <button className='btn btn-primary' type='button' onClick={SendMessage} onKeyPress={SendMessage}>Enviar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

