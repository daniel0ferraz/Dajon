import React, { useEffect, useState } from 'react';
import ListaCategorias from '../../components/ListaCategorias';
import Cards from '../../components/Cards';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

export default function Categoria() {
  const { id } = useParams();
  const { path } = useRouteMatch();

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/produtos?categoria/${id}`)
      .then((response) => {
        setCategorias(response.data)
        console.log("Categoria:", categorias.id);
      });
  }, [categorias.id, id]);

  return (
    <div>
      <div className="container">
        <h2>Produto</h2>
      </div>

      <ListaCategorias />

      <Route exact path={`/${path}/${id}`}>
        <Cards url={``} />
      </Route>
    </div>
  )
}