import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import List from './List'
import NewTask from './NewTask'
class App extends Component{
  constructor(){
    super();

    this.state ={
      list: [],
      
    }

    this.addList = this.addList.bind(this)
  }

  addList(task){
    this.setState({ list: [...this.state.list, task]})
  }

  render(){
    return(
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add ={this.addList}/>
        <List tasks={this.state.list}/>
      </div>
    )
  }
}

export default App;
