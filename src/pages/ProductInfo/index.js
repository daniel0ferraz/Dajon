import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import Sacola from '../../assets/local_mall_black_24dp.svg'
import "./styles.css"
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

export default function ProductInfo() {

  const { id } = useParams()
  const history = useHistory();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/produtos/${id}`)
      .then((response) => {
        setProduct(response.data)
        console.log("id Produto", response.data);
      });
  }, [id]);


  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/produtos/${id}`)
      if (response && (response.status === 201 || response.status === 200)) {
        toast(`Produto do Id=(${id}) excluido`)
        history.push('/');
      } else if (!response) {
        alert.error("Erro ao excluir produto")
      }
    } catch (e) {
      toast.error("erro requisção",e)
    }
  }

  return (
    <>
      <div className="container_home">
        <div className="title-home">
          <h2><img src={Sacola} alt="sacola" />Informações do produto</h2>
        </div>

        <section className="list-product">
          <div className="product-card">
            <img src={product.urlImg} alt={product.title} className="product-card-image" />
            <div className="product-card-info">
              <h3 className="product-card-title">{product.nome}</h3>
              <span className="product-card-price">
                R$ {product.preco}
              </span>
              <footer className="product-card-footer">
                <span className={`product-category--${product.categoria}`}>
                  {product.categoria}
                </span>

                <button className="product-card-count" >
                  Quantidade: {product.quantidade}
                </button>

                <span className="promotion-card__link"
                >
                  Comprar
                </span>

                <button className="promotion-card__delete-button" onClick={() => handleDelete()}>Deletar</button>

                <Link to={`/editar-produto/${product.id}`} className="promotion-card__edit-button">
                  Editar
                </Link>

              </footer>
            </div>
          </div>

        </section>
      </div>

    </>
  )
}