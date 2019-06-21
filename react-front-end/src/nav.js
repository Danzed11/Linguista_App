import React, { Component } from 'react';
import './stylesheets/nav.css';

class Nav extends Component {
	render() {
		return (
			<nav>
				<div className="nav-left">
					<h1>Linguista</h1>
				</div>
				<div className="nav-right">
					<h4>Hi User</h4>
				</div>
			</nav>
		);
	}
}

export default Nav;
