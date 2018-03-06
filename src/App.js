import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> HELLO WORLD!! </h1>
        <Person name='Boris' age='22'> I like boobs </Person>
      </div>
    );
  }
}

export default App;
