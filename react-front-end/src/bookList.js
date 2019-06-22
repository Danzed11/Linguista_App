import React, { Component } from 'react';
import './stylesheets/booklist.css';
import FileList from './file_list.js';

class Booklist extends Component {
	render() {
		return (
			<div className="library-page">
				<FileList />
			</div>
		);
	}
}

export default Booklist;
