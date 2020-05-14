import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class Type extends Component{
  constructor(){
    super();

    this.state = {
      message: ""
      
    }
  }


handleChange(value) {
  this.setState({message: value})
  console.log(value)
}

render(){
  return(
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text"/>
      <p>{this.state.message} Hello</p>
    </div>
  )
}
}

export default Type;
