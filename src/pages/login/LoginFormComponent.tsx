//import useMessages from 'common/hooks/useMessages';
import useAuth from 'common/hooks/useAuth';
import React, { FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function LoginFormComponent() {
  //const { addMessage, removeMessage } = useMessages();
  const {signed, signIn, user} = useAuth();
  const history = useHistory();
  
  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    await signIn();

    history.push('dashboard');

    /*addMessage({
      type: "success",
      title: "Titulo i9xp",
      text: "texto i9xp",
      action: (
        <div>
          <Link to="/app" className="btn btn-messages-success btn-borderless" onClick={removeMessage}>Voltar ao Mapa</Link>
        </div>
      )
    });*/
  }

  return (
    <div>
    <form className="happy-forms" onSubmit={handleSignIn}>
      <h1>Fazer Login</h1>

      <div className="happy-forms-block">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" />
      </div>

      <div className="happy-forms-block">
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" />
      </div>

      <div className="happy-forms-block inline-block">
        <div className="checkbox">
          <input type="checkbox" name="lembrar" id="lembrar" />
          <label htmlFor="lembrar">Lembrar-me</label>
        </div>

        <Link to="/login/forgot-password">Esqueci minha senha</Link>
      </div>

      <div className="happy-forms-block action-block">
        <button type="submit" className="btn btn-green btn-borderless">Entrar</button>
      </div>
    </form>
    </div>
  )
}