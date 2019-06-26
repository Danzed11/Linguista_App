import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";import '../stylesheets/nav.css';

class Nav extends Component {
	render() {
		return (
			<main>
			<nav>
				<div className="nav-left">
					{/* <h1>Linguista</h1> */}
					<img
						className="logo"
						src="https://github.com/Danzed11/Linguista_App/blob/master/react-front-end/public/logo/logoLG-Col.png?raw=true"
						alt="Linguista"
					/>
					<div className="dropdown">
						<button className="dropbtn">Menu <span id="droparrow">⌄</span>
							</button>
						<div className="dropdown-content">
							<Link to ="/dashboard">Dashboard</Link>
							<Link to ="/study">Flashcards</Link>
							<Link to ="/library">Book List</Link>
						</div>
					</div>
				</div>
				<div className="nav-right">
					<h4>Hi User</h4>
				</div>
			</nav>

			</main>
		);
	}
}



export default Nav;
