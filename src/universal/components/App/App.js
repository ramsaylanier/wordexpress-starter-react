import React, {Component, PropTypes} from 'react';

import styles from './App.css';
import 'universal/styles/reset.scss';
import 'universal/styles/typography.scss';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render () {
    return (
      <div className={styles.app}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
