import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('dash mounted');
  }

  render() {
    return <div>Dashboard goes here</div>;
  }
}

export default Dashboard;