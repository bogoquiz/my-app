import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const color = ["verdes","rojo","azul"]
    return (
      <div>
        <h1>HOLA REACT!!!</h1>
        <p>jelou</p>

        <ul>
          {color.map(name => 
            <li key={name}>{name}</li>
          )}
        </ul>
      </div>  
    );
  }
}

export default App;
