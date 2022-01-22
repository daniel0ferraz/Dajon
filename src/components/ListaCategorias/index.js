import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import * as S from "./styles";
import { Link } from 'react-router-dom';
=======
import './styles.css'
import { useParams } from 'react-router-dom';
>>>>>>> 5c876023143608772a34b2516f932665ecb36f2f
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
