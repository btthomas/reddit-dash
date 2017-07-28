import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchReddit } from '../actions';
import AppComponent from '../components/App.js';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchReddit());
  }

  render() {
    return <AppComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps)(App);