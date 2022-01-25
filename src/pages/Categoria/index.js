import React, { useEffect, useState } from 'react';
import ListaCategorias from '../../components/ListaCategorias';
import Cards from '../../components/Cards';
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  Switch,
} from 'react-router-dom';

import api from '../../service/api';

export default function Categoria() {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    api.get(`categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.setSubCategorias);
    });
  }, [id]);

  return (
    <div>
      <div className="container">
        <h2>Produto</h2>
      </div>

      <ListaCategorias />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <Cards url={`/produtos?categoria=${id}`} />
        </Route>
      </Switch>
    </div>
  );
}
