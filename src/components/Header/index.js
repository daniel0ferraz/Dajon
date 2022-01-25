import React from 'react';
import * as S from './styles';
import Sacola from '../../assets/local_mall_white_24dp.svg';
import User from '../../assets/person.svg';
import cart from '../../assets/cart_white.svg';
export default function Header() {
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
            <span>Daniel Ferraz</span>
          </S.UserInfo>

          <S.BoxUser>
            <div className="">
              <img src={User} alt="" />
            </div>
            <div className="">
              <img className="cart" src={cart} alt="sacola" />
            </div>
          </S.BoxUser>
        </S.BoxInfo>
      </S.Header>
    </div>
  );
}
