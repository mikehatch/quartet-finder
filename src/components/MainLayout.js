import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
import logo from '../music-note.svg';

class MainLayout extends Component {
  render() {
    return (
        <div className="MainLayout">
            <Menu>
                {/* <a id="home" className="menu-item" href="/">Home</a> */}
                <Link to="/" className="menu-item">Home</Link> 
                <Link to="/mysongs" className="menu-item">My Songs</Link>
                {/* <a id="mysongs" className="menu-item" href="/mysongs">My Songs</a> */}
                {/* <a id="about" className="menu-item" href="/about">About</a> */}
                <Link to="/about" className="menu-item" >About</Link>
                {/* <a id="contact" className="menu-item" href="/contact">Contact</a> */}
                {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
            </Menu>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Quartet Finder </h1>
            </header>
            <main >
                <div>{this.props.children}</div>
            </main>
        </div>
    )
  }
}
export default MainLayout;