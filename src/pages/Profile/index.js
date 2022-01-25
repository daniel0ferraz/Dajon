import React from 'react';
import NavHeader from '../../components/NavHeader';
import * as S from './styles';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <S.Container_Home>
      <NavHeader />
      <S.Title_Home>
        <S.Title>Minha conta</S.Title>
      </S.Title_Home>

      <section>
        <span>minhas informações</span>
        <br />
        <Link to="estoque">Acessar Estoque</Link>
        <br />
        <Link to="cadastro-produto">Novo Produto</Link>
      </section>
    </S.Container_Home>
  );
}
