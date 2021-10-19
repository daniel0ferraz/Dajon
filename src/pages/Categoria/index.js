import React from 'react';
import ListaCategorias from '../../components/ListaCategorias';
import Cards from '../../components/Cards';
import { Route, useParams, useRouteMatch } from 'react-router-dom';

export default function Categoria() {
  const { id } = useParams();
  const { path } = useRouteMatch();

  return (
    <>
      <div className="container">
        <h2>Produto</h2>
      </div>

      <ListaCategorias />
      <Route exact path={`${path}/${id}`}>
        <Cards url={`/produtos?categoria=${id}`} ></Cards>
      </Route>
    </>
  )
}