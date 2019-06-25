import React, { Component } from 'react';
import './stylesheets/booklist.css';
import FileList from './file_list.js';
import UploadForm from './components/epubUploadForm.js'

class Booklist extends Component {
	render() {
		return (
			<div className="library-page">
				<FileList />
				<h1>This is the booklist</h1>
        <UploadForm />

			</div>
		);
	}
}

export default Booklist;
