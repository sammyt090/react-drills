import React, { Component } from 'react';

import './App.css';

class Login extends Component {
  constructor(){
    super();


    this.state={
      username: "",
      password: ""
    }
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this);
    this.handleUpdateUsername = this.handleUpdateUsername.bind(this);
    this.alertUser = this.alertUser.bind(this)
  }

  handleUpdateUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handleUpdatePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  alertUser(e){
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    // this.setState({
    //   login: event.target.value
    // })
  }

  render(){

    return (
      <div>
        <input
        onChange= {this.handleUpdateUsername}
        placeholder ="Username"/>
        <input 
        onChange= {this.handleUpdatePassword}
        placeholder ="Password"/>
        <button onClick={this.alertUser}>Login</button>
      </div>
    )
  }
 
  
}

export default Login;
