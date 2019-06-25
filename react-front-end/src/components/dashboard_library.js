import React, { Component } from 'react';
import '../stylesheets/booklist.css';
import LibraryCarousel from './libraryCarousel.jsx';

class DashboardLibrary extends Component {
	render() {
		return (
			<div className="libraryContainer-dashboard">
				<div className="overlay" />
				<LibraryCarousel />
			</div>
		);
	}
}

export default DashboardLibrary;
