import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


var PortfolioCard = React.createClass({
  render() {
    return (
      <div className="portfoliocard">
        <Card>
          <CardTitle title={this.props.title} subtitle={this.props.time} />
          <CardText>{this.props.description}</CardText>
          <CardActions>
            <FlatButton label="Demo" onClick={this.handleButtonClick} backgroundColor="#90A4AE" />
          </CardActions>
        </Card>
      </div>
    );
  },

  handleButtonClick() {
    window.location = this.props.url;
  }

})

export default PortfolioCard;
