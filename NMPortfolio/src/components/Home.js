import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'

var About = React.createClass({
  render() {
    return (
      <div className="home">
        <div>
          <h1>Hey!</h1>
          <h1>I'm Nico Malig.</h1>

          <iframe
            className="pdf-wrapper"
            src="https://docs.google.com/document/d/e/2PACX-1vRRBFlYdsZX3taAUF14npz2GjG2JD0lWkB4BNXPmjwAQFALaLVDQhRjHRThXjGtFvt-KHJjOmfOQEw7/pub?embedded=true"
          >
          </iframe>
          <RaisedButton
            label="Download my resume in PDF"
            fullWidth={true}
            secondary={true}
            href="https://docs.google.com/document/d/1kFXxMf1MQtkIIm9Llx_5DZkUXVnTjEI7FrjzXs6E2hU/edit?usp=sharing"
            style={{
              backgroundColor: 'red',
            }}
          />
        </div>
      </div>
    );
  },

  handleButtonClick() {

  },

})

export default About;
