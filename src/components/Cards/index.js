import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import ImgNull from '../../assets/card_background.png';
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
      <div className="container_card">
        {products.map((product) => (

          <Link to={`/produto/${product.id}`}>
            <div className="card" key={product?.id}>
              <div className="card-img">
                {
                  product.urlImg === '' ? (
                    <img src={ImgNull} alt="img null" />
                  ) : (
                    <img src={product.urlImg} alt="img null" />
                  )
                }
              </div>
              <div className="card-info">
                <span className={`product-category--${product.categoria}`}>{product.categoria}</span>
                <h1>{product.nome}</h1>
              </div>

              <div className="card-price">
                <span>R$ {product.preco}</span>
                <button>Comprar</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}