import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
  	super();
  	this.state = {
  		name: "",
  		terms: false
  	}
  }	

  render() {
    return (
        <div>
        	<h1>Hola form</h1>
        	<input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
        	<div>
        		<label>
        			<input type="checkbox" checked={this.state.terms} onClick={this.updateTerms.bind(this)} />Acepto
        		</label>
        	</div>
        	<button onClick={this.sayHi.bind(this)}>Say hi!</button>
        </div>
    );
  }

  updateName(event) {
  	this.setState({
  		name: event.target.value
  	})
  }

  updateTerms(event){
  	this.setState({
  		terms: event.target.checked
  	})
  }

  sayHi(){
  	if (this.state.terms) {
  		alert('hola ' + this.state.name)
  	} else{
  		alert('Debe aceptar ')
  	};
  	
  }

}

export default App;
