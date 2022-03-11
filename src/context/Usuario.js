import React, { createContext, useState } from 'react';

export const UsuarioContext = createContext();

UsuarioContext.displayName = 'Usuario';

export const UsuarioProvider = ({ children }) => {
  const [nome, setNome] = useState('');

  // console.log('nome->', nome)

  return (
    <UsuarioContext.Provider value={{ nome, setNome }}>
      {children}
    </UsuarioContext.Provider>
  );
};
