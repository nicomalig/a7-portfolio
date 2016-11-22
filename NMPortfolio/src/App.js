import React from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

var App = React.createClass ({
  render() {
    return (
      <div className="container">
      <div>
        <Tabs
          className="tabbar"
          inkBarStyle={{
            backgroundColor: 'white',
          }}
          >
            <Tab
              icon={<FontIcon className="material-icons">home</FontIcon>}
              value="home"
              onActive={this.handleTabChange}
            />
            <Tab
              icon={<FontIcon className="material-icons">import_contacts</FontIcon>}
              value="portfolio"
              onActive={this.handleTabChange}
            />
            <Tab
              icon={<FontIcon className="material-icons">contacts</FontIcon>}
              value="contact"
              onActive={this.handleTabChange}
            />
          </Tabs>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  },

  getInitialState() {
    return({
      hello: "world",
    })
  },

  handleTabChange(tab) {
    if (tab.props.value === "home") {
      window.location = "/#";
    } else if (tab.props.value === "portfolio") {
      window.location = "/#/portfolio";
    } else if (tab.props.value === "contact"){
      window.location = "/#/contact";
    }
  },

})

export default App;
