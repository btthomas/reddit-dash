import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleCollapsed, fetchReddit } from '../actions';
import PostsComponent from '../components/Posts.js';

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      redditResponse: null
    };

    this.fetchReddit = this.fetchReddit.bind(this);
    this.dispatchToggleCollapsed = this.dispatchToggleCollapsed.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchReddit());
    // this.fetchReddit();
  }

  dispatchToggleCollapsed() {
    const { dispatch } = this.props;
    dispatch(toggleCollapsed());
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
    const props = {
      ...this.props,
      ...this.state,
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