import React from 'react';
import PortfolioCard from './PortfolioCard.js';
import Baby from 'babyparse'
import $ from 'jquery';

var Portfolio = React.createClass({
  getInitialState() {
    return ({
      entries:[],
    })
  },

  render() {
    return (
      <div className="portfolio">
        <h1>See what I've been doing</h1>
          {
            this.state.entries.map(function(entry, i) {
              return (
                <PortfolioCard
                  key={'entry' + i}
                  title={entry.Title}
                  time={entry.Time}
                  description={entry.Description}
                  url={entry.URL}
                />
              )
            })
          }
      </div>
    );
  },

  componentDidMount() {
    $.get('data/portfolio.csv').then(function(data) {
      var parsed = Baby.parse(data, {header:true});
      this.setState({entries:parsed.data})
    }.bind(this));
  },


})

export default Portfolio;
