import React, {Component} from 'react';

import './App.css';

class List extends Component{
  constructor(){
    super();
    

    this.state= {
      movies: ["Star Wars", "Avengers", "Harry Potter", "The Lord of The Rings"],
      filterMovies: ""
    }
  }

  handleChange(filter) {
    this.setState({filterMovies: filter})
  }

render(){
  let favMovies = this.state.movies
  .filter((e, i) => {
    return e.includes(this.state.filterMovies);
  })
   .map((e, i) => <h2 key={i}>{e}</h2>);

  
      
    return (
    <div className ="List">
      <input onChange={e=> this.handleChange(e.target.value)} type="text"/>
      {favMovies}
   </div>
       );
}
}

export default List;
