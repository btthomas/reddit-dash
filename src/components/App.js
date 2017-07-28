import React, { Component } from 'react';
import logo from '../images/reddit-icon.png';
import './App.css';
import Posts from '../containers/Posts.js';
// import Dashboard from '../containers/Dashboard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the reddit dashboard</h2>
        </div>
        <Posts />
      </div>
    );
  }
}

export default App;
