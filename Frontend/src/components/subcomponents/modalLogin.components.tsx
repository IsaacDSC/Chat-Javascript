import React, { useEffect, useState } from 'react';
import { LoginUser } from '../../settings/axios';

export const ModalChatLogin = ({ userState }) => {

  const [values, setValues] = useState({})
  const [message, setMessage] = useState(null)

  function onChange(ev: any) {
    setValues({ ...values, [ev.target.name]: ev.target.value })
  }

  async function Login() {
    const { username, password }: any = values;
    const { data, status } = await LoginUser({ username, password })
    console.log({ status, data })
    if (data?.message) return setMessage(data?.message)

    setMessage(null)
    return userState(data?.user)
  }

  return (
    <>
      <div className="modal fade" id="modalChatLogin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">Chat Demo - Login</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {
              message ?
                <div className="container mt-3">
                  <div className="alert alert-danger" role="alert">
                    Login ou Senha Inválida
                  </div>
                </div>
                : null
            }
            <div className="modal-body">
              <input type="text" className="form-control mt-2" name="username" maxLength={8} onChange={onChange} placeholder="Digite seu Username" />
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