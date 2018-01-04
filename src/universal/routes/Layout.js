import React from 'react';
import { Route, Switch } from 'react-router';
import routes from './index';

import AppContainer from 'universal/containers/App/AppContainer.js'
import AppHeader from 'universal/components/Header/AppHeader.js'


const Layout = () => (
  <AppContainer>
    <AppHeader/>
    <Switch>
      {routes.map(route => <Route key={`route-${route.name}`} {...route} />)}
    </Switch>
  </AppContainer>
);

export default Layout;
