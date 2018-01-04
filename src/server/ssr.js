// Node Modules
import fs from 'fs';
import {basename, join} from 'path';

// Libraries
import React from 'react';
import {renderToString} from 'react-dom/server';

// Redux
// import {push} from 'react-router-redux';
import createHistory from 'history/createMemoryHistory'

// Components
import Html from './Html.js';

import ApolloClient from 'apollo-client'
import { ApolloProvider, renderToStringWithData } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'node-fetch';

import {Route, StaticRouter} from 'react-router';
import Layout from 'universal/routes/Layout.js';

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch
  }),
  cache: new InMemoryCache()
});

function renderApp(url, res, assets, content) {
  const context = {};

  const html = renderToString(
    <Html
      title='💥'
      url={url}
      context={context}
      assets={assets}
      content={content}/>
  );

  res.send('<!DOCTYPE html>'+html);
}

export const renderPage = function (req, res) {
  const assets = require('../../build/assets.json');

  assets.manifest.text = fs.readFileSync(
    join(__dirname, '..', '..', 'build', basename(assets.manifest.js)),
    'utf-8'
  );

  const context = {};
  
  const component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <Layout/>
      </StaticRouter>
    </ApolloProvider>
  );

  renderToStringWithData(component).then(content => {
    renderApp(req.url, res, assets, content);
  })

};

export const renderDevPage = function (req, res) {
  renderApp(req.url, res);
};

export default renderPage;
