import React, { Component } from 'react';
import Study_word from './components/Study_word.js';

import axios from 'axios';
import './stylesheets/wordlist.css';

class Wordlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}
	componentWillMount() {
		axios
			.get('/words/data') // You can simply make your requests to "/api/whatever you want"
			.then(response => {
				this.setState({
					words: response.data,
					loading: false,
				});
			});
	}
	render() {
		if (this.state.loading) {
			return <div className="wordlist-page">Wordlist Loading...</div>;
		} else {
			return (
				<div className="wordllist-page">
					{this.state.words.map(word => (
						<Study_word foreign={word.foreign_word} english={word.english_word} />
					))}
				</div>
			);
		}
	}
}

export default Wordlist;
