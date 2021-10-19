import React from 'react';
import * as S from "./styles";
import Sacola from '../../assets/local_mall_white_24dp.svg'

export default function Header() {
  return (
    <>
      <S.Header>
        <S.TitleHeader><S.ImageHeader src={Sacola} alt="sacola" />Dajon</S.TitleHeader>
        <div className="links">
        </div>
      </S.Header>
    </>
  )
}