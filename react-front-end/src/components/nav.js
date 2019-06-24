import React, { Component } from 'react';
import '../stylesheets/nav.css';

class Nav extends Component {
	render() {
		return (
			<body>
			<nav>
				<div className="nav-left">
					{/* <h1>Linguista</h1> */}
					<img
						className="logo"
						src="https://github.com/Danzed11/Linguista_App/blob/master/react-front-end/public/logo/logoLG-Col.png?raw=true"
						alt="Linguista"
					/>
				</div>
				<div className="nav-right">
					<h4>Hi User</h4>
				</div>
			</nav>
			<div></div>
			</body>
		);
	}
}

export default Nav;
