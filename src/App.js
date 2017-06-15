import React, { Component } from 'react';
import Hifive from './Title.js'
import './App.css';


class App extends Component {
  render() {
    const techi = ["reactivo", "angulito", "backyni"]
    return (
      <div>
        <Hifive name="nodecito" />
        <Hifive name="webpackcito" />
        {techi.map(frame => 
          <Hifive name={frame} />)}
      </div>  
    );
  }
}

export default App;
