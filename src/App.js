import React, { Component } from 'react';
import logo from './music-note.svg';
import './App.css';
import {slide as Menu} from 'react-burger-menu';
import { Link } from 'react-router-dom';


class App extends Component {

  showSettings (event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <Menu>
            {/* <a id="home" className="menu-item" href="/">Home</a> */}
            <Link to="/" className="menu-item">Home</Link> 
            <Link to="/mysongs" className="menu-item">My Songs</Link>
            {/* <a id="mysongs" className="menu-item" href="/mysongs">My Songs</a> */}
            {/* <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a> */}
            {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
        </Menu>
        <main >
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Quartet Finder </h1>
          </header>
          <div>Test</div>
        </main>
        {/* <AuthComponent/> */}
      </div>
    );
  }
}

export default App;
