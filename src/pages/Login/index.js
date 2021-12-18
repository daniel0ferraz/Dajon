import React from 'react';

export default function Login() {
  return (
    <>
      <div className="">
        <form>
          <div className="">
            <input type="text" name="email" placeholder="E-mail" />
          </div>

          <div className="">
            <input type="password" name="password" placeholder="Senha" />
          </div>

          <button>Entrar</button>
        </form>
      </div>
    </>
  );
}
