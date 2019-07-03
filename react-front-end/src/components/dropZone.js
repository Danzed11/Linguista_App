import React, { Component } from 'react';
import '../stylesheets/dropzone.css';
import UploadForm from './epubUploadForm';

class DropZone extends Component {
	render() {
		return (
			<div className="dropZone">
				<div className="container">
					<div className="overlay" />
					<h1>Upload Your Books Here</h1>
					<div className="upload">
						<UploadForm />
					</div>
				</div>
			</div>
		);
	}
}

export default DropZone;
