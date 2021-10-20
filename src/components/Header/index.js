import React from 'react';
import * as S from "./styles";
import Sacola from '../../assets/local_mall_black_24dp.svg'

export default function Header() {
  return (
    <>
      <S.Header>
        <S.TitleHeader>
          <img src={Sacola} alt="sacola" />
          Dajon</S.TitleHeader>
      </S.Header>
    </>
  )
}