import React, { Component} from 'react';
import login from '../asset/Login2.png';
import budget from '../asset/Budget2.png';
import entry from '../asset/Entry2.png';

class Features extends Component{
  render(){

  
  return (
    <div className = "HomePage" style = {{height: 'auto'}}>
          <header className="App-header" style = {{alignItems: 'flex-start', height: 'auto' }}>
              <div >
                  <h1>
                      Features
                  </h1>
                  <div className = "Features">
                    <nav className='nav-Features nav'>
                      <ul>
                        <li>
                            <div className = 'nav-div'>
                              <div>
                              Records kept under account
                              </div>
                              <img src={login} className="FeatureImage" alt="Budget Tracker - Login"/>
                            </div>
                            
                        </li>
                        <li>
                        </li>
                         <li>
                            <div className = 'nav-div'>
                            <div>
                            Easy to monitor the progress
                            </div>
                            <img src={budget} className="FeatureImage" alt="Budget Tracker - Budget"/>
                            </div>
                            
                        </li>
                        <li>
                        </li>
                        <li>
                            <div className = 'nav-div'>
                            <div>
                            Simple Button to Add Entry
                            </div>
                            <img src={entry} className="FeatureImage" alt="Budget Tracker - Entry"/>
                            </div>
                        </li>
                      </ul>
                     </nav>
                  </div>
              </div>
          
          {/*<img src={budget_tracker_back} className="App-Mockup" alt = "Budget Tracker Template"/>*/}
          </header>
        </div>
  );
}
}

export default Features;
