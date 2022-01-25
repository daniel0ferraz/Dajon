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

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/categoria/:id" component={Categoria} />
        <Route path="/produto/:id" component={ProductInfo} />
        <Route path="/editar-produto/:id" component={ProductRegistration} />
        <Route path="/cadastro-produto" component={ProductRegistration} />
        <Route path="/estoque" component={Stock} />
        <Route path="/minha-conta" component={Profile} />
        <Route path="/minhas-compras" component={Cart} />
        <Route path="/nav" component={Nav} />

        <Route component={() => <div>Page 404!</div>} />
      </Switch>
    </Router>
  );
}
