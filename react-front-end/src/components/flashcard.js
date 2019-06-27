import React, { Component } from 'react';
import '../stylesheets/flashcard.css';
import { Link } from 'react-router-dom';

class Flashcard extends Component {
	render() {
		return (
			<button className="button flashcardContainer">
				<Link to="/study" style={{ textDecoration: 'none', color: '#13292a' }}>
					<h1>Click here to study your words with Flashcards</h1>
				</Link>
			</button>
		);
	}
}

export default Flashcard;
