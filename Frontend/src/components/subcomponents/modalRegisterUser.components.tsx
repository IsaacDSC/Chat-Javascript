import React, { useEffect, useState } from 'react';
import { InsertUser } from '../../settings/axios';

export const ModalRegisterUser = ({ userState }) => {

  const [values, setValues] = useState({})

  function onChange(ev: any) {
    setValues({ ...values, [ev.target.name]: ev.target.value })
  }

  async function Login() {
    const { username, email, birthday, password }: any = values;
    const { data } = await InsertUser({ username, email, birthday, password })
    console.log(data.user)
    userState(data?.user)
  }

  return (
    <>
      <div className="modal fade" id="modalChatRegister" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title  text-dark" id="exampleModalLabel">Chat Demo - Register</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input type="text" className="form-control mt-2" name="username" maxLength={8} onChange={onChange} placeholder="Username" />
              <input type="email" className="form-control mt-2" name="email" onChange={onChange} placeholder="E-mail" />
              <input type="date" className="form-control mt-2" name="birthday" onChange={onChange} placeholder="Data de Nascimento" />
              <input type="password" className="form-control mt-2" name="password" onChange={onChange} placeholder="Digite uma senha" />
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