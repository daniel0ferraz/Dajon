import React, { useEffect, useState } from 'react';
import ListaCategorias from '../../components/ListaCategorias';
import Cards from '../../components/Cards';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

export default function Categoria() {
  const { id } = useParams();
  const { path } = useRouteMatch();

  console.log('categoria', id);

  return (
    <div>
      <div className="container">
        <h2>Produto</h2>
      </div>

      <ListaCategorias />

      <Route exact path={`${path}/`}>
        <Cards url={`http://localhost:5000/produtos?categoria=${id}`} />
      </Route>
    </div>
  );
}
