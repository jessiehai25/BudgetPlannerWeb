import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import icon from '../asset/Budget Tracker.png';
import { MdEmail } from "react-icons/md";

class Footer extends Component {
	render(){
		return(
			
			<nav className='footer'>
				<ul>
					<li>
						<img src={icon} className="App-logo" alt="Budget Tracker icon"/>
					</li>
					<p>
					</p>
					<li>
						<div activeClassName = 'active' className = 'active'>
						Copyright © 2022
						</div>
					</li>

				</ul>
				<ul>
					<li>
						<NavLink to ='/Terms' activeClassName = 'active' className = 'active'>
						Terms &amp; Conditions
						</NavLink>
					</li>
					<li>
						<NavLink to ='/PrivacyPolicy' activeClassName = 'active' className = 'active'>
						Privacy Policy
						</NavLink>
					</li>

				</ul>
				<ul>
					<li>
						<NavLink to ='/ContactUs' activeClassName = 'active' className = 'active'>
							<MdEmail/> Contact Us
						</NavLink>
					</li>
					
					<li>
					</li>
						
					

				</ul>
			</nav>
		)

	}

}

export default Footer;


