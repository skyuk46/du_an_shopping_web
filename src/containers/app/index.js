import React from 'react';
import { Router,Route, Switch } from 'react-router-dom';
import history from '../../services/history';
import Home from '../home';

/**
 *
 * @returns {*}
 */
export default function AppContainer() {
  return (
    <div className={'root'}>
      <Router history={history}>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
