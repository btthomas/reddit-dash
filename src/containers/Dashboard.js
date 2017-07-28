import React, { Component } from 'react';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      redditResponse: null
    };

    this.fetchReddit = this.fetchReddit.bind(this);
    this.renderResponse = this.renderResponse.bind(this);
  }

  componentDidMount() {
    this.fetchReddit();
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

  renderResponse() {
    return (
      <ol>
        {this.state.redditResponse.data.children.map(post => {
          return (
            <li key={post.data.id} className={post.data.over_18 ? 'strikethrough' : ''}>
              {post.data.title} <a href={post.data.permalink}>link</a>
            </li>
          );
        })}
      </ol>
    );
  }

  render() {
    return this.state.redditResponse ? this.renderResponse() : 'No Response Yet';
  }
}

export default Dashboard;