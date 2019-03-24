import React, { Component, Dispatch } from 'react';
import './App.css';
import Centers from './components/Centers/Centers';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col">
            <Centers></Centers>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
