import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: {name:"Boris", age: 31}
  }

  changeNameHandler = () => {
    console.log("button pushed");
    this.setState( {
      person: {name: 'Pulento', age:69}
    })

  }

  render() {
    return (
      <div className="App">
        <h1> HELLO WORLD!! </h1>
        <button onClick={this.changeNameHandler}> Change Name </button>
        <Person name={this.state.person.name} age={this.state.person.age}> I like boobs </Person>
      </div>
    );
  }
}

export default App;
