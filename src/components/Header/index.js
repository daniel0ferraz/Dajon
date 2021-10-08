import React from 'react';
import "./styles.css"

export default function Header() {
  return (
    <>
      <header>
        <h1>Dajon</h1>
        <div className="links">
          <span>
            <a href="/cadastro-produto">Adicionar Produto</a>
          </span>
          <span>
            <a href="/">Menu</a>

          </span>
        </div>

        <div className="">
          <span>Cadastrar</span>
        </div>
      </header>
    </>
  )
}