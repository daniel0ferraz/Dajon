import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Inventory from '../../assets/inventory.svg';
import Money_white from '../../assets/money_white.svg';
import ArrowUp from '../../assets/arrow_circle_up.svg';
import ArrowDown from '../../assets/arrow_circle_down.svg';
import api from '../../service/api';

export default function Stock() {
  const [result, setResult] = useState([]);

  return (
    <S.Container_Stock>
      <div className="row">
        <S.CardsItens>
          <S.CardHeader>
            <h3>Estoque</h3>
            <img src={Inventory} alt="" />
          </S.CardHeader>
          <S.CardResult>
            <span>1000</span>
          </S.CardResult>
        </S.CardsItens>

        <S.CardsItens>
          <S.CardHeader>
            <h3>Entradas</h3>
            <img src={ArrowUp} alt="" />
          </S.CardHeader>
          <S.CardResult>
            <span>R$ 0.00</span>
          </S.CardResult>
        </S.CardsItens>

        <S.CardsItens className="total">
          <S.CardHeader>
            <h3>Saída</h3>
            <img src={ArrowDown} alt="" />
          </S.CardHeader>
          <S.CardResult>
            <span>R$ 0.00</span>
          </S.CardResult>
        </S.CardsItens>

        <S.CardsItens>
          <S.CardHeader>
            <h3>Saldo Total</h3>
            <img src={Money_white} alt="" />
          </S.CardHeader>
          <S.CardResult>
            <span className="total">R$ 0.00</span>
          </S.CardResult>
        </S.CardsItens>
      </div>
    </S.Container_Stock>
  );
}
