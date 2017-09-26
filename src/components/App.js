import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import logo from '../images/reddit-icon.png';
import './App.css';
import Posts from '../components/Posts.js';
import Dashboard from '../components/Dashboard.js';

@observer
class App extends Component {
  constructor() {
    super();

    this.myState = observable({
      redditResponse: null,
      collapsed: true
    });

    this.toggleCollapsed = this.toggleCollapsed.bind(this);

    this.fetchReddit();
  }

  @action
  toggleCollapsed() {
    this.myState.collapsed = !this.myState.collapsed;
  }

  @action
  fetchReddit() {
    fetch('https://www.reddit.com/.json')
      .then(res => res.json())
      .then(json => {
        this.myState.redditResponse = json;
      })
      .catch(err => {
        console.log('there was an error with fetchReddit');
        console.log(err);
      });
  }

  render() {
    const postProps = {
      ...this.myState,
      handleClick: this.toggleCollapsed
    };

    const dashProps = {
      ...this.myState,
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
