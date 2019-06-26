import React, { Component } from 'react';
import '../stylesheets/dropzone.css';

class DropZone extends Component {
	render() {
		return (
			<div className="dropZone">
				<div className="container">
					<div className="overlay" />
					<h1>upload your books here</h1>
				</div>
			</div>
		);
	}
}

export default DropZone;
