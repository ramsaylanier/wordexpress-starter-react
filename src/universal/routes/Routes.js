// Libraries
import React, {Component, PropTypes} from  'react'
import {Route, Redirect} from 'react-router'

// Routes
// For Development only
import * as RouteMap from '../routes/static.js'

// This is used in production for code splitting via `wepback.config.server.js`
// import * as RouteMap from 'universal/routes/async.js';

// Containers
import AppContainer from 'universal/containers/App/AppContainer.js'
import AppHeader from 'universal/components/Header/AppHeader.js'

class Routes extends Component {
  render () {
    const {
      location
    } = this.props

    return (
      <AppContainer>
        <div>
          <AppHeader/>
          <Route exact location={location} path='/' component={RouteMap.Page} />
          <Route exact location={location} path='/:name' component={RouteMap.Page} />
          <Route exact location={location} path='/post/:name' component={RouteMap.Post} />
          <Route exact location={location} path='/category/:id' component={RouteMap.Category} />
        </div>
      </AppContainer>
    );
  }
}

export default Routes;
