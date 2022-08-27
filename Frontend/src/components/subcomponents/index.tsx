import React, { useEffect, useState } from 'react';
import { InsertUser } from '../../settings/axios';

export const ModalChatLogin = ({ userState }) => {

  const [values, setValues] = useState({})

  function onChange(ev: any) {
    setValues({ ...values, [ev.target.name]: ev.target.value })
  }

  async function Login() {
    const { username, email, birthday }: any = values;
    const user = await InsertUser({ username, email, birthday })
    console.log(user?.data?.user)
    userState(user?.data?.user)
  }

  return (
    <>
      <div className="modal fade" id="modalChatLogin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Chat Demo</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control mt-2" name="username" maxLength={8} onChange={onChange} placeholder="Username" />
              <input type="email" className="form-control mt-2" name="email" onChange={onChange} placeholder="E-mail" />
              <input type="date" className="form-control mt-2" name="birthday" onChange={onChange} placeholder="Data de Nascimento" />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={Login}>
                Acessar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}