import React, { Component } from 'react';

import logo from '../music-note.svg';

class MainLayout extends Component {
  render() {
    return (
        <div className="MainLayout">
         {/* Comment */}
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