// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import UserListPage from './UserListPage';
import NotFound from './NotFound';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserListPage} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
