import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import ImgNull from '../../assets/card_background.png';

export default function Cards() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/produtos?_embed=categorias&_order=desc&_sort=id')
      .then((response) => {
        setProducts(response.data)
      });
  }, []);

  return (
    <>
      <div className="container_card">
        {products.map((product) => (
          <div className="card" key={product?.id}>

            <div className="card-img">
              {
                product.urlImg === '' ? (
                  <img src={ImgNull} alt="" />
                ) : (
                  <img src={product.urlImg} alt="" />
                )}
            </div>
            <div className="card-info">
              <span>{product.categoria}</span>
              <h1>{product.nome}</h1>
            </div>

            <div className="card-price">
              <span>{product.preco}</span>
              <button>Comprar</button>
            </div>
          </div>

        ))}
      </div>

    </>
  )
}