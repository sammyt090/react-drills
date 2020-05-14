import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component{
  constructor(){
    super()

    this.state={
      list: [],
      userInput: ''
    }

    this.updateList = this.updateList.bind(this)
  }
  changeInput(value){
    this.setState({input: value})
  }

  updateList(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render(){
    let list = this.state.list.map((e,i)=> <Todo key={i} task={e}/>);

    return (
      <div className="App">
        <h1>My to-do list:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.changeInput(e.target.value)}
          />

          <button onClick={this.updateList}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }



}

export default App;
