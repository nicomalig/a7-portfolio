import React from 'react';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

var App = React.createClass ({
  render() {
    return (
      <div className="container">
        <AppBar
          className="appbar"
          title="Nico Malig"
          showMenuIconButton={false}
          zDepth={2}
        />
      <Tabs className="tabbar">
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
        <div>
          {this.props.children}
        </div>
      </div>
    )
  },

  getInitialState() {
    return({
      hello: "world",
      open: false,
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
