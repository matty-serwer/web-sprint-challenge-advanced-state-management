import React, { Component } from "react";
import Smurfs from './Smurfs';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Reduxx</h1>
        <Smurfs />
      </div>
    );
  }
}

export default App;
