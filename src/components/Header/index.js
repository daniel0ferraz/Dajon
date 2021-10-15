import React from 'react';
import * as S from "./styles";
import Sacola from '../../assets/local_mall_black_24dp.svg'

export default function Header() {
  return (
    <>
      <S.Header>
        <h1><img src={Sacola} alt="sacola" />Dajon</h1>
        <div className="links">
        </div>
      </S.Header>
    </>
  )
}