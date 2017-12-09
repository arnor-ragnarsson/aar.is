import React, { Component } from 'react';
import { render } from 'react-dom';

import './scss/styles.scss';

export default class App extends Component {
  render() {
    return(
      <h1>Hæ Nóri!</h1>
    );
  }
}

render(
  <App />, document.getElementById('app')
)
