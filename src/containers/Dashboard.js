import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardComponent from '../components/Dashboard.js';

class Dashboard extends Component {
  render() {
    return <DashboardComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const { collapsed, reddit } = state;

  return {
    collapsed: !collapsed,
    reddit
  }
}

export default connect(mapStateToProps)(Dashboard);