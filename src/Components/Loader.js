import React, { Component } from "react";
import './Loader.css'

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  
  render() {
    return (
      <div className="Loader-box">
        <div className="loader "></div>
        <div className="loader-text ">Saving counter value</div>
      </div>
    );
  }
}

export default Loader;
