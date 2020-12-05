import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

export default function ForgotPasswordComponent() {
  const history = useHistory();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    history.push('/login/reset-password');
  }


  return (
    <form className="happy-forms" onSubmit={handleSubmit}>
      <h1>Esqueci a senha</h1>

      <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>

      <div className="happy-forms-block">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" />
      </div>

      <div className="happy-forms-block action-block">
        <button type="submit" className="btn btn-green">Enviar</button>
      </div>
    </form>
  )
}