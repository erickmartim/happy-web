import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

export default function PasswordResetComponent() {
  const history = useHistory();
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    history.push('/login');
  }
  return (
    <form className="happy-forms" onSubmit={handleSubmit}>
      <h1>Redefinição de Senha</h1>

      <p>Escolha uma nova senha para você acessar o dashboard do Happy</p>

      <div className="happy-forms-block">
        <label htmlFor="nova-pass">Nova senha</label>
        <input name="nova-pass" type="password" id="nova-pass" />
      </div>

      <div className="happy-forms-block">
        <label htmlFor="nova-pass">Repetir senha</label>
        <input name="nova-pass-confirm" type="password" id="nova-pass-confirm" />
      </div>

      <div className="happy-forms-block action-block">
        <button type="submit" className="btn btn-green">Redefinir Senha</button>
      </div>
    </form>
  )
}