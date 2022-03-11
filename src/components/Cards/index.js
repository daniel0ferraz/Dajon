import React, { useEffect, useState } from 'react';

import ImgNull from '../../assets/card_background.png';
import * as S from './styles';
import { Link } from 'react-router-dom';
import api from '../../service/api';
import { formatToBRL } from 'brazilian-values';

export default function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('produtos?_limit=8').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <S.Contaner_Card>
        {products.map((product, index) => (
          <Link key={product.id} to={`/produto/${product.id}`}>
            <S.Card>
              <S.Card_Img>
                {product.urlImg === '' ? (
                  <img src={ImgNull} alt="img null" />
                ) : (
                  <img src={product.urlImg} alt={product.name} />
                )}
              </S.Card_Img>
              <S.Card_Info>
                <span className={`product-category--${product.categoria}`}>
                  {product.categoria}
                </span>
                <h1>{product.nome}</h1>
              </S.Card_Info>

              <S.Card_Price>
                <span>{formatToBRL(product.preco)}</span>
                <button>Comprar</button>
              </S.Card_Price>
            </S.Card>
          </Link>
        ))}
      </S.Contaner_Card>
    </div>
  );
}
