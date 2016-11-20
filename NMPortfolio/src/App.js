import React from 'react';
import './App.css';
import {Link} from 'react-router';


var App = React.createClass ({
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  },

  getInitialState() {
    return({
      hello: "world",
    })
  },
})

export default App;
