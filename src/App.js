import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timeStart: Date.now()
    }
  }
  render() {
    return (
      <div>
        <HomePage timeStart={this.state.timeStart} />
      </div>
    );
  }
}
