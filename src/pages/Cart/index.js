import React from 'react';
import * as S from './styles';
import image from '../../assets/production_quantity.svg';
import close from '../../assets/close.svg';

export default function Cart() {
  const getProduct = JSON.parse(localStorage.getItem('comprado'));
  console.log('getPRd', getProduct);

  if (getProduct === null) {
    alert('voce n possui nenhhuma compra');
  }
  return (
    <S.Container_Home>
      <S.Title_Home>
        <S.Title>Meu Carrinho</S.Title>
      </S.Title_Home>

      <S.ListProduct>
        <S.ListGroupProductInfo>
          <S.ImageProduct>
            <img src={image} alt="" />
          </S.ImageProduct>

          <S.InfoProduct>
            <h3>Produto</h3>
            <p>{getProduct.nome}</p>
          </S.InfoProduct>
        </S.ListGroupProductInfo>

        <S.InfoProduct>
          <h3>Quantidade</h3>
          <p>{getProduct.quantidade}</p>
        </S.InfoProduct>

        <S.InfoProduct>
          <h3>Categoria</h3>
          <p>{getProduct.categoria}</p>
        </S.InfoProduct>

        <S.InfoProduct>
          <h3>Preço total</h3>
          <p>R$ {getProduct.preco}</p>
        </S.InfoProduct>

        <S.InfoProduct>
          <img src={close} alt="iconDelete" />
        </S.InfoProduct>
      </S.ListProduct>
    </S.Container_Home>
  );
}
