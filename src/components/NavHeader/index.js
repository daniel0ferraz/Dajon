import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import arrowLeft from '../../assets/chevron_left.svg';

export default function NavHeader() {
  return (
    <S.Title_Home>
      <Link to="/">
        <img src={arrowLeft} alt="" />
        Voltar
      </Link>
    </S.Title_Home>
  );
}
