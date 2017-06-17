import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory';
//import { Link } from 'react-router-dom'
import './App.css';

  //const customHistory = createBrowserHistory()	
  const Home = () => <h2>Home</h2>
  const About = () => <h2>About</h2>
  const NoMatch = () => <h2>NoMatch</h2>
  //const NoMatch = () => <h2>NoMatch</h2>

  const Template = (props) => {
  	return (
  		<div>
  			<h1>TITULO</h1>
  			<ul>
  				<li><Link to="/">Home</Link ></li>
     			<li><Link  to="about">About</Link ></li>
  			</ul>
  			{props.children}
  		</div>
  	)
  }

class App extends Component {

  render() {
    return (
        <Router>
        <div>
        	<Template />
	        	<Route exact  path="/" component={Home} />
	        	<Route path="about" Component={About} />
	        	<Route path="*" component={NoMatch} />
	    </div>    	
        </Router>
        
    );
  }
}

export default App;
