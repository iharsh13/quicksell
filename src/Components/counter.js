import React, { Component } from "react";
import ShowCounter from "./showCounter";
import Loader from './Loader';
import './counter.css';
const axios = require("axios");
require('dotenv').config()


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: null,
      max: 1000,
      InputCounter:null,
      loader:false
    };
  }

  componentDidMount() {
    console.log("dot env file is", process.env.REACT_APP_MAX_VALUE)
    this.setState({
      max: process.env.REACT_APP_MAX_VALUE || 1000
    })

    axios.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json")
      .then((resp) => {
        if(resp.data!=null)
        {
            this.setState({
                counter:parseInt(resp.data),
                InputCounter:parseInt(resp.data)
            })
        }
        else{
            this.setState({
                counter:1,
                InputCounter:1
            })
        }
        // console.log(resp.data)
      })
      .catch((err) => {console.log(err)});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
        this.setState({
          loader:true
        })
        axios.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',{"Harsh Harshit": this.state.counter})
        .then((response) => {
          this.setState({
            loader:false
          })
          // console.log(response)
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
  }


  incrementCounter = () => {
    if(parseInt(this.state.counter)< parseInt(this.state.max))
    {
        this.setState({
            counter: parseInt(this.state.counter) + 1,
            InputCounter:parseInt(this.state.counter) + 1,

        });
        
    } 
  };

  decrementCounter = () => {
    this.setState({
      counter: parseInt(this.state.counter) - 1,
      InputCounter:parseInt(this.state.counter) - 1,
    });
  };
  
  handleChange = (e) =>{
    console.log(e.target.value)
    this.setState({
     InputCounter: parseInt(e.target.value)
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.InputCounter);
    let val = parseInt(this.state.InputCounter)
    if(val<this.state.max)
    {
      this.setState({
        counter: val
      });
    }
    
  }

  render() {
    return (
      <div className="App">
        <div className="loader-container">
          {this.state.loader ? <Loader/> : null}
        </div>
        
        {/* <h2>Count: {this.state.counter} </h2> */}
        {/* <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="counter" defaultValue={this.state.counter} id="" />
        </form>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button> */}
        <div className="btn-container">
          <button className="btn-div btn-dec" onClick={this.decrementCounter}><span className="operator-negative">-</span></button>
            <form className="btn-div" onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} type="number" name="counter" width="100%" value={this.state.InputCounter} id="" />
              {/* <input onChange={this.handleChange} type="number" name="counter" width="100%" value={this.state.counter} id="" /> */}
              
            </form>
          <button className="btn-div btn-inc" onClick={this.incrementCounter}><span className="operator-positive">+</span></button>
        </div>
        <div className="value-container">
          <ShowCounter counter = {this.state.counter}/>
        </div>
      </div>
    );
  }
}

export default Counter;
