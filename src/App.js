import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
  	super();

  	this.state = {
  		names: []
  	};

  	axios.get("http://localhost:3001/names")
  		 .then(response => {
  		 	console.log(response)
  		 	this.setState({
  		 		names: response.data
  		 	})
  		 })
  		 .catch(error => {
  		 	console.log(error)
  		 })
  }	
  render() {
    return (
    	<div>
        	<h1>HOLA http!!!</h1>
        	<ul>
        		{this.state.names.map(item =>
        			<li key={item}>{item}</li>
        		)}
        	</ul>
        </div>	
    );
  }
}

export default App;
