import React, { Component } from 'react';
import logo from '../images/reddit-icon.png';
import './App.css';
import Posts from '../components/Posts.js';
import Dashboard from '../components/Dashboard.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      redditResponse: null,
      collapsed: true
    };

    this.toggleCollapsed = this.toggleCollapsed.bind(this);

    this.fetchReddit();
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  fetchReddit() {
    fetch('https://www.reddit.com/.json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          redditResponse: json
        });
      })
      .catch(err => {
        console.log('there was an error with fetchReddit');
        console.log(err);
      });
  }

  render() {
    const postProps = {
      ...this.state,
      handleClick: this.toggleCollapsed
    };

    const dashProps = {
      ...this.state,
    };

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the reddit dashboard</h2>
        </div>
        <Posts {...postProps} />
        <Dashboard {...dashProps} />
      </div>
    );
  }
}

export default App;
