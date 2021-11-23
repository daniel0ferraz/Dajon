import React, { useEffect, useState } from 'react';
import './styles.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ListaCategorias() {
  const { id } = useParams();
  const [categorias, setCategorias] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:5000/categorias/${id}`)
      .then((response) => {
        setCategorias(response.data)
      });
  }, [id]);

  return (
    <>
      <div className="container_categorias">
        <ul>
          {
            categorias.map((categoria) => (
              <Link to={`/categoria/${categoria.id}`}>
                <li>{categoria.nome}</li>
              </Link>
            ))
          } 
        </ul>
      </div>
    </>
  )
}
