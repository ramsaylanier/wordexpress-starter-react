import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

// Components
import App from './containers/AppContainer.js';

// Redux
import createHistory from 'history/createBrowserHistory';

import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'

const history = createHistory();

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql'
  }),
  // here we're initializing the cache with the data from the server's cache
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const rootEl = document.getElementById('root')
const renderApp = (Component) => {
    render(
      <AppContainer>
        <ApolloProvider client={client}>
          <Component history={history}/>
        </ApolloProvider>
      </AppContainer>
      ,
      rootEl
    );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./containers/AppContainer.js', () => {
    const nextApp = require('./containers/AppContainer.js');
    renderApp(nextApp);
  });
}
