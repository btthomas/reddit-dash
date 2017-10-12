import React, { Component } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { XYPlot, VerticalBarSeries, XAxis, YAxis, HorizontalGridLines } from 'react-vis';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      width: (window.innerWidth) / 2 - 50,
      height: 400,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleResize = this.handleResize.bind(this);

  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleClick(e) {
    e.preventDefault();

    this.props.handleClick();
  }

  handleResize() {
    this.setState({
      width: (window.innerWidth) / 2 - 50,
      height: 400,
    });
  }

  getData(property) {
    const { posts } = this.props.reddit;

    if ( !posts.length ) {
      return [];
    }

    return posts.map((post, index) => {
      return {
        x: index + 1,
        y: this.getValue(post, property),
      }
    })
  }

  getValue(post, property) {
    if ( property === 'age' ) {
      const now = new Date().getTime() / 1000;
      return 8 + (now - post.created) / 3600;
    }
    return post[property] || 0;
  }

  renderChart(num, property, color) {
    const { width, height } = this.state;
    const data = this.getData(property);

    return (
      <XYPlot margin={{left: 100, right: 20, top: 20, bottom: 60}} data={data} width={width} height={height}>
        <HorizontalGridLines data={data} tickTotal={8} />
        <XAxis data={data} />
        <YAxis data={data} />
        <VerticalBarSeries
          data={data}
          color={color}
        />
      </XYPlot>
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

              // <h3 className="chart-title">{chart.title}</h3>
    return this.props.reddit.fetched && (
      <div className="chartWrapper">
        {charts.map( (chart, index) => {
          return (
            <div className="chart" key={chart.key}>
              {this.renderChart(index, chart.key, chart.color)}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Dashboard;