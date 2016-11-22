import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'

var About = React.createClass({
  render() {
    return (
      <div className="home">
        <div>
          <h1>Hey!</h1>
          <h1>I'm Nico Malig.</h1>

          {!/mobile|tablet/i.test(navigator.userAgent) &&
            <iframe
              className="pdf-wrapper"
              src="https://docs.google.com/document/d/e/2PACX-1vRRBFlYdsZX3taAUF14npz2GjG2JD0lWkB4BNXPmjwAQFALaLVDQhRjHRThXjGtFvt-KHJjOmfOQEw7/pub?embedded=true"
            >
            </iframe>
          }
          {/mobile|tablet/i.test(navigator.userAgent) &&
            <div>
              <br />
              <h3 style={{color: 'orange'}}>Hey mobile visitor!</h3>
              <p>Embedding PDFs in HTML doesn't look all too good on a mobile device.</p>
              <p>You may see my resume by clicking below.</p>
              <br />
            </div>
          }
          <RaisedButton
            label="View my resume on Google Drive"
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

})

export default About;
