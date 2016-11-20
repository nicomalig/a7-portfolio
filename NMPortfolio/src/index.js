import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, hashHistory} from 'react-router';
import {About} from './About.js';
import {Portfolio} from './Portfolio.js';
import {Contact} from './Contact.js';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('root')
);
