import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import ImgNull from '../../assets/card_background.png';
import { Link } from 'react-router-dom'

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

          <Link to={`/produto/${product.id}`}>
            <div className="card" key={product?.id}>
              <div className="card-img">
                {
                  product.urlImg === '' ? (
                    <img src={ImgNull} />
                  ) : (
                    <img src={product.urlImg} />
                  )
                }
              </div>
              <div className="card-info">
                <span>{product.categoria}</span>
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