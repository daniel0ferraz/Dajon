import React from 'react';
import * as S from "./styles";
import Sacola from '../../assets/local_mall_white_24dp.svg'
import User from '../../assets/user.svg';
export default function Header() {
  return (
    <div>
      <S.Header>
        <S.TitleHeader><S.ImageHeader src={Sacola} alt="sacola" />Dajon</S.TitleHeader>

        <S.BoxInfo>

          <S.UserInfo>
            <h3>Programador</h3>
            <span>Daniel Ferraz</span>
          </S.UserInfo>

          <S.BoxUser>
            <img src={User} alt="" />
          </S.BoxUser>

        </S.BoxInfo>

      </S.Header>
    </div >
  )
}