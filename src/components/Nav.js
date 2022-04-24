import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import icon from '../asset/Budget Tracker.png';

class Nav extends Component {
	render(){
		return(
			
			<nav className='nav'>
				<ul>
					<li>
						<NavLink to = '/' exact activeClassName = 'active' className = 'active'>
							<img src={icon} className="App-logo" alt="Budget Tracker icon"/>
						</NavLink>
					</li>
					<li>
						<NavLink to ='/Features' activeClassName = 'active' className = 'active'>
						Features
						</NavLink>
					</li>

					<li>
						<NavLink to ='/ContactUs' activeClassName = 'active' className = 'active'>
						Contact Us
						</NavLink>
					</li>
					<li>
					</li>
					<li>
					</li>
					<li>
					</li>
					<li>
					</li>
					<li>
					</li>
					<li>
					</li>
					<li>
						<NavLink to ='/leaderboard' activeClassName = 'active' className = 'active'>
						Download
						</NavLink>
					</li>
					<li>
					</li>
				</ul>
			</nav>
		)

	}

}

export default Nav;


