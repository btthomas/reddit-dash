import React, { Component } from 'react';
import spinner from '../images/spinner.png';

class Posts extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.handleClick()
  }

  renderResponse() {
    return this.props.fetched && (
      <div>
        <button onClick={this.handleClick}>Click to {this.props.collapsed ? 'expand' : 'collapse'} posts</button>
        {!this.props.collapsed && this.renderExpanded()}
      </div>
    );
  }

  renderExpanded() {
    return (
      <ol>
        {this.props.posts.map(post => {
          return (
            <li key={post.id} className={post.over_18 ? 'strikethrough' : ''}>
              {post.title} <a href={`https://reddit.com/${post.permalink}`}>link</a>
            </li>
          );
        })}
      </ol>
    );    
  }

  renderSpinner() {
    return <img src={spinner} className="spin" alt=""/>
  }

  render() {
    return this.props.isFetching ? this.renderSpinner() : this.renderResponse();
  }
}

export default Posts;