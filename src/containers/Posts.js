import React, { Component } from 'react';
import PostsComponent from '../components/Posts.js';

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      redditResponse: null,
      collapsed: true
    };

    this.fetchReddit = this.fetchReddit.bind(this);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  componentDidMount() {
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
    const props = {
      ...this.state,
      handleClick: this.toggleCollapsed
    };
    return <PostsComponent {...props}/>;
  }
}

export default Posts;