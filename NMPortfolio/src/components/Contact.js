import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var Contact = React.createClass({
  render() {
    return (
      <div className="contact">
        <h1>Let's get in touch.</h1>
          <div
            className="typeform-widget"
            data-url="https://nicomalig.typeform.com/to/mv5qXQ"
            data-text="Contact Form"
            style={{
              width:'100%',
              height:'75vh',
            }}
          ></div>
          {this.typeform()}
          <div style={{
              fontFamily: 'Sans-Serif',
              fontSize: '12px',
              color: '#999',
              opacity: '0.5',
              paddingTop: '5px',
            }}>
            <a href="https://www.typeform.com/examples/forms/contact-form-template/?utm_campaign=mv5qXQ&amp;utm_source=typeform.com-5569562-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-contactform&amp;utm_term=EN"
              style={{color: '#999'}}
              target="_blank">
              Contact form
            </a> powered by Typeform
          </div>
      </div>
    );
  },

  typeform() {
    var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
    if (!gi.call(d,id)) {
      js=ce.call(d,'script');
      js.id=id;
      js.src=b+'widget.js';
      q=gt.call(d,'script')[0];
      q.parentNode.insertBefore(js,q);
    }
  }

  // renderTypeform() {
  //   var mobile = false;
  //   var desktop = false;
  //   if (/mobile|tablet/i.test(navigator.userAgent)) {
  //     mobile = true;
  //   } else {
  //     desktop = true;
  //   }
  //   return(
  //     <div
  //       className="typeform-widget"
  //       data-url="https://nicomalig.typeform.com/to/mv5qXQ"
  //       data-text="Contact Form"
  //       style={{
  //         width: '100%',
  //         height: '500px',
  //       }}>
  //     </div>
  //     (mobile &&
  //       <RaisedButton href="https://nicomalig.typeform.com/to/mv5qXQ" />
  //     )
  //     (desktop &&
  //       {
  //         var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b="https://s3-eu-west-1.amazonaws.com/share.typeform.com/";
  //         if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}}
  //       <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"><a href="https://www.typeform.com/examples/forms/contact-form-template/?utm_campaign=mv5qXQ&amp;utm_source=typeform.com-5569562-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-contactform&amp;utm_term=EN" style="color: #999" target="_blank">Contact form</a>powered by Typeform</div>
  //     )
  //   )
  // },


})

export default Contact;
