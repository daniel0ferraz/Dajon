import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImgNull from '../../assets/card_background.png';
import * as S from "./styles"
import { Link } from 'react-router-dom'

export default function Cards() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/produtos')
      .then((response) => {
        setProducts(response.data)
      });
  }, []);

  return (
    <>
      <S.Contaner_Card>
        {products.map((product) => (
          <Link to={`/produto/${product.id}`}>
            <S.Card key={product.id}>
              <S.Card_Img>
                {
                  product.urlImg === '' ? (
                    <img src={ImgNull} alt="img null" />
                  ) : (
                    <img src={product.urlImg} alt={product.name} />
                  )
                }
              </S.Card_Img>
              <S.Card_Info>
                <span className={`product-category--${product.categoria}`}>{product.categoria}</span>
                <h1>{product.nome}</h1>
              </S.Card_Info>

              <S.Card_Price>
                <span>R$ {product.preco}</span>
                <button>Comprar</button>
              </S.Card_Price>
            </S.Card>
          </Link>
        ))}
      </S.Contaner_Card>
    </>
  )
}