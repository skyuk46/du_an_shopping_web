import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../services/history';
import Home from '../home';
import Login from '../user/Login';
import Register from '../user/Register'
import Cart from '../cart/Cart';
import ProductDetail from '../product/ProductDetail'
import Admin from '../admin/Admin'

/**
 *
 * @returns {*}
 */
export default function AppContainer() {
  return (
    <div className={'root'}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}
