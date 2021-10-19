import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import ProductRegistration from '../pages/ProductRegistration';
import ProductInfo from '../pages/ProductInfo';
import Categoria from '../pages/Categoria';


export default function Routes() {
	return (
		<>
			<Router>
				<Header />
				<Switch>
					<Route path='/' exact component={Home} />

					<Route path='/home' component={Home} />
					<Route path='/categoria/:id' component={Categoria} />
					<Route path='/produto/:id' component={ProductInfo} />
					<Route path='/editar-produto/:id' component={ProductRegistration} />
					<Route path='/cadastro-produto' component={ProductRegistration} />

					<Route component={() => <div>Page 404!</div>} />
				</Switch>
			</Router>
		</>
	);
}
