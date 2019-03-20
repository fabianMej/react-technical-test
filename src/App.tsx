import React, { Component } from 'react';
import './App.css';
import Centers from './components/Centers/Centers';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row justify-content-center">
          <Centers></Centers>
        </div>
      </div>
    );
  }
}

export default App;
