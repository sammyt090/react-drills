import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class List extends Component{
  constructor(){
    super();
    

    this.state= {
      movies: ["Star Wars", "Avengers", "Harry Potter", "The Lord of The Rings"]
    }
  }

render(){
  let favMovies = this.state.movies.map((e, i) => <h2 key={i}>{e}</h2>);

  
      
    return <div className="List">{favMovies}</div>;
}
}

export default List;
