import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import ProductRegistration from '../pages/ProductRegistration';
import ProductInfo from '../pages/ProductInfo';
import Categoria from '../pages/Categoria';
import Nav from './../components/Nav/index';
import Login from './../pages/Login/index';
import Stock from '../pages/Stock/index';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import { UsuarioProvider } from '../context/Usuario';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <UsuarioProvider>
          <Header />
          <Route path="/" exact component={Login} />
          <Route path="/Home" component={Home} />
          <Route path="/categoria/:id" component={Categoria} />
          <Route path="/produto/:id" component={ProductInfo} />
          <Route path="/editar-produto/:id" component={ProductRegistration} />
          <Route path="/cadastro-produto" component={ProductRegistration} />
          <Route path="/estoque" component={Stock} />
          <Route path="/minha-conta" component={Profile} />
          <Route path="/minhas-compras" component={Cart} />
          <Route path="/nav" component={Nav} />
        </UsuarioProvider>

        <Route component={() => <div>Page 404!</div>} />
      </Switch>
    </Router>
  );
}
//
