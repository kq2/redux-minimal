// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import SearchableUserList from './SearchableUserList';
import NotFound from './NotFound';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={SearchableUserList} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
