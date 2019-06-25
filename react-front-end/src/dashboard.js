import React, { Component } from 'react';

import './stylesheets/App.css';

import Nav from './components/nav.js';
import DashboardLibrary from './components/dashboard_library.js';
import DashboardWordlist from './components/dashboard_wordlist.js';
import Dropzone from './components/dropZone.js';
import Flashcard from './components/flashcard.js';

class Dashboard extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<div className="dash-row">
					<DashboardLibrary />
					<DashboardWordlist />
				</div>
				<div className="dash-row">
					<Dropzone />
					<Flashcard />
				</div>
			</div>
		);
	}
}

export default Dashboard;
