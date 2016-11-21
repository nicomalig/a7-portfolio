import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Module imports
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


ReactDOM.render((
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="portfolio" component={Portfolio} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root')
);
