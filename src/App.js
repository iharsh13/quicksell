import React, { Component } from "react";
import Counter from "./Components/counter";
import ShowCounter from "./Components/showCounter";
import "./App.css";
require('dotenv').config()
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="container">
        <div class="child">
          <Counter/>
        </div>
      </div>
    );
  }
}

export default App;
