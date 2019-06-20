import React, { Component } from 'react';
import './stylesheets/flashcard.css';

class Flashcard extends Component {
	render() {
		return (
			<div className="flashcardContainer">
				<h4>this is the flashcard box</h4>
				<h1>{this.props.message}</h1>
				<button onClick={this.fetchData}>Fetch Data</button>
			</div>
		);
	}
}

export default Flashcard;
