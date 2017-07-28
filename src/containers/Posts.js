import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCollapsed } from '../actions';
import PostsComponent from '../components/Posts.js';

class Posts extends Component {
  constructor() {
    super();

    this.dispatchToggleCollapsed = this.dispatchToggleCollapsed.bind(this);
  }

  dispatchToggleCollapsed() {
    const { dispatch } = this.props;
    dispatch(toggleCollapsed());
  }

  render() {
    const props = {
      ...this.props,
      handleClick: this.dispatchToggleCollapsed
    };
    return <PostsComponent {...props}/>;
  }
}

const mapStateToProps = (state) => {
  const { collapsed, reddit } = state;

  return {
    collapsed,
    ...reddit
  };
}

export default connect(mapStateToProps)(Posts);