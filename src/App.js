import React, { Component } from 'react';
import Compt from './Compt'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.changeTitle = this.changeTitle.bind(this)
    this.state = {
      title: "hola desde estado"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.changeTitle}>
          CAMBIO!!!
        </button>
        <Compt />
      </div>  
    );
  }

  changeTitle() {
    this.setState({title: "otro texto"})
  }
}

export default App;
