import React, { Component} from 'react';
import Email from '../asset/email.png';

class ContactUs extends Component{
  render(){

  
  return (
    <div className = "HomePage BackgroundGrey">
          <header className="App-header" style = {{alignItems: 'flex-start', height: 'auto' }}>
              <div className="Features">
                <header>
                  <h1>
                      Contact Us
                  </h1>
                </header>
                  <div className = "nav nav-ContactUs">
                    <ul>
                      <li style = {{flex:1}}>
                        <div>
                          <img src={Email} className = "ContactImage" alt="Email"/>
                          </div>
                      </li>
                      <li style = {{flex:2}}>
                          <div className = "ContactUs-Text">
                              <h2>
                              Any suggestions or Feedback? 
                              </h2>
                              <p>
                              I would love to hear from you. 
                              </p>
                              <button 
                                className="submitBtn"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='mailto:jessiewlhai@gmail.com?subject=Contact Us on Budget Planner';
                                  }}
                              >Email Me</button>
                          </div>
                      </li>
                    </ul>
                  </div>
                  
              </div>
        
          </header>
    </div>
  );
}
}

export default ContactUs;
