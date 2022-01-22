import React, { useEffect, useState } from 'react';
import * as S from "./styles";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ListaCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/categorias/`)
      .then((response) => {
        setCategorias(response.data)
      });
  }, []);

  return (

    <div className="container_categorias">
      <S.Itens>
        {
          categorias.map((categoria) => (
            <Link key={categoria.id} to={`/categoria/${categoria.id}`}>
              <li className={`product-category--${categoria.id}`}>{categoria.id}</li>
            </Link>

          ))
        }
      </S.Itens>
    </div>

  )
}
