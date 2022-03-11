import React from 'react';

import * as S from './styles';
import Sacola from '../../assets/local_mall_white_24dp.svg';
import User from '../../assets/person.svg';
import cart from '../../assets/cart_white.svg';

import { UsuarioContext } from '../../context/Usuario';
import { useContext } from 'react';

export default function Header() {
  const { nome } = useContext(UsuarioContext);

  console.log('nomeUSe', nome);
  return (
    <div>
      <S.Header>
        <S.TitleHeader>
          <S.ImageHeader src={Sacola} alt="sacola" />
          Dajon
        </S.TitleHeader>

        <S.BoxInfo>
          <S.UserInfo>
            <h3>Olá</h3>
            <span>{nome ? nome : 'Não logado'}</span>
          </S.UserInfo>

          <S.BoxUser>
            <div className="">
              <a href="/minha-conta">
                <img src={User} alt="myAccount" />
              </a>
            </div>
            <div className="">
              <a href="/minhas-compras">
                {/* <div className="countItens">{contador}</div> */}
                <img className="cart" src={cart} alt="sacola" />
              </a>
            </div>
          </S.BoxUser>
        </S.BoxInfo>
      </S.Header>
    </div>
  );
}
