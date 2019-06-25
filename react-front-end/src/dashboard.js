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
			<fragment>
			<Nav/>
			<div className="App">
				
				<div className="dash-row">
					<DashboardLibrary />
					<Flashcard />
				</div>
				<div className="dash-row">
					<Dropzone />
					<DashboardWordlist />
				</div>
			</div>
			</fragment>
		);
	}
}

export default Dashboard;
