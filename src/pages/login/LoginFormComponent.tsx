import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function LoginFormComponent() {
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className="happy-forms" onSubmit={handleSubmit}>
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
  )
}