import React, {Component, PropTypes} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router';

// Redux
import { Provider } from 'react-redux';

// Components
import Layout from 'universal/routes/Layout.js';

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const {
      history
    } = this.props;

    return (
      <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    ) ;
  }
}

export default AppContainer;
