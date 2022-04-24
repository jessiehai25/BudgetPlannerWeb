import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import Privacy from './Privacy';
import Terms from './Terms';
import Features from './Features';
import ContactUs from './ContactUs';
import Nav from './Nav';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop.js';

class App extends Component{

  render(){
    return (
      <Router>
             <ScrollToTop />
        <div>
          <div>
            <Nav/>
          </div>
          <div className= 'App-Container'>
          <Routes>
       
              <Route path='/' element = {<HomePage/>} />
              <Route path='/Features' element = {<Features/>} />
              <Route path='/ContactUs' element = {<ContactUs/>} />
              <Route path='/PrivacyPolicy' element = {<Privacy/>} />
              <Route path='/Terms' element = {<Terms/>} />   
          </Routes> 
          </div>
          <div>
          <Footer/>
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
