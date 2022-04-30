import React, { Component} from 'react';
import appstore from '../asset/AppStore.svg';
import Features from './Features'
import ContactUs from './ContactUs'

class HomePage extends Component{
  render(){
  return (
    <div className = "HomePage">
        <div className = "Background">
          <header className="App-header">
              <div className="Header">
                  <h1>
                      Budget Planner
                  </h1>
                  <h3>
                  Make Your Life Easier
                  </h3>
                  <a
                    className="App-link"
                    href="https://apps.apple.com/app/budget-planner-track-expense/id1620205013"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <img src={appstore} alt="Budget Tracker Download"/>
                  </a>
              </div>
          
          {/*<img src={budget_tracker_back} className="App-Mockup" alt = "Budget Tracker Template"/>*/}
          </header>
        </div>
        <Features/>
        <ContactUs/>
    </div>
  );
}
}

export default HomePage;
