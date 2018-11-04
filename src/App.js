import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
import MainLayout from './components/MainLayout';
import MySongs from './components/MySongs';
import About from './components/About';
import Map from './components/Map';


class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <Router>
        <div>
        <Menu>
            {/* <a id="home" className="menu-item" href="/">Home</a> */}
            <Link to="/" className="menu-item">Home</Link> 
            <Link to="/mysongs" className="menu-item">My Songs</Link>
            <Link to="/map" className="menu-item">Map</Link>
            {/* <a id="mysongs" className="menu-item" href="/mysongs">My Songs</a> */}
            {/* <a id="about" className="menu-item" href="/about">About</a> */}
            <Link to="/about" className="menu-item" >About</Link>
            {/* <a id="contact" className="menu-item" href="/contact">Contact</a> */}
            {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        </Menu>
        <Switch>
          <Route exact path="/" component={MainLayout}></Route>
          <Route path="/mysongs" component={MySongs}></Route>
          <Route path="/map" component={Map}></Route>
          <Route exact path="/about" component={About}></Route>
          
        </Switch>  
        </div>
      </Router>
    );
  }
}

export default App;
//export {MainLayout};