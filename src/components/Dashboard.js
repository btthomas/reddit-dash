import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.handleClick();
  }

  render() {
    return 'Dashboard';
  }
}

export default Dashboard;