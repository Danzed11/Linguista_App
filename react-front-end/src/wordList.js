import React, { Component } from 'react';
import Study_word from './components/Study_word.js';

import axios from 'axios';
import './stylesheets/wordlist.css';

class Wordlist extends Component {
	constructor(props) {
		super(props);
		this.renderWords = this.renderWords.bind(this);
		this.state = {
			loading: true,
		};
	}

	renderWords() {
		axios
			.get('/words/data') // You can simply make your requests to "/api/whatever you want"
			.then(response => {
				this.setState({
					words: response.data,
					loading: false,
				});
			});
	}

	componentWillMount() {
		this.renderWords()
	}
	render() {
		if (this.state.loading) {
			return <div className="wordlist-page">Wordlist Loading...</div>;
		} else {
			return (
				<div className="wordllist-page">
					<div className="contentContainer">
						<table className="word">
							
							<thead>
								<tr>
									<th>Foreign word</th>
									<th>Translated word</th>
									<th>Delete</th>
								</tr>
							</thead>
							{this.state.words.map(word => (
								<Study_word
									renderWords={this.renderWords}
									foreign={word.foreign_word}
									english={word.english_word}
									dbID={word.id}
								/>
							))}
						</table>
					</div>
				</div>
			);
		}
	}
}

export default Wordlist;
