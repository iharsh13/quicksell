import React, { Component } from "react";
import './counter.css'

class ShowCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  
  render() {
    return (
      <div className="text-css">
        Counter value : {this.props.counter}
      </div>
    );
  }
}

export default ShowCounter;
