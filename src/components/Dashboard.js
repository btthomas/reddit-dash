import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

class Dashboard extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.handleClick();
  }

  getData() {
    const { posts } = this.props.reddit;
    const now = new Date().getTime() / 1000;

    if ( !posts.length ) {
      return [];
    }

    return posts.map((post, index) => {
      return {
        rank: index + 1,
        age: 8 + (now - post.created) / 3600,
        ...post
      }
    })

  }

  renderChart(property, color) {
    const { width, height } = getSize();

    return (
      <BarChart width={width/2} height={height/2} data={this.getData()}>
        <XAxis dataKey="rank" />
        <YAxis />
        <Tooltip />
        <Bar 
          fill={color}
          dataKey={property}
        />
      </BarChart>
    );
  }

  render() {
    const charts = [
      {
        title: 'Karma', 
        key: 'score',
        color: "#8811dd",
      },
      {
        title: 'Comments', 
        key: 'num_comments',
        color: "#dd8811",
      },
      {
        title: 'Age', 
        key: 'age',
        color: "#11dd88",
      },
      {
        title: 'Gold', 
        key: 'gilded',
        color: "#dd1188",
      },
    ];

    return this.props.reddit.fetched && (
      <div className="chartWrapper">
        {charts.map(chart => {
          return (
            <div className="chart" key={chart.key}>
              <h3 className="chart-title">{chart.title}</h3>
              {this.renderChart(chart.key, chart.color)}
            </div>
          )
        })}
      </div>
    );
  }
}

function getSize() {
  return {
    width: 1300,
    height: 800
  }
}

export default Dashboard;