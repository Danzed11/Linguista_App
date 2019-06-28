import React, { Component } from 'react';
import './stylesheets/flashcard.css';
import Nav from './components/nav.js';
import Tabs from './tabs.jsx';
import Wordlist from './wordList';
import FlashcardActivity from './flashcardactivity';

class Study extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Tabs className="tabs">
					<div label="Words">
						<Wordlist />
					</div>
					<div label="Flashcards">
						<FlashcardActivity />
					</div>
				</Tabs>
			</div>
		);
	}
}

export default Study;
