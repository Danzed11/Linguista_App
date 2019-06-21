import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios';
import './stylesheets/App.css';
import Nav from './nav.js';
import Booklist from './bookList.js';
import Wordlist from './wordList.js';
import Dropzone from './dropZone.js';
import Flashcard from './flashcard.js';
import Dashboard from './dashboard.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: 'Click the button to load data!',
		};
	}

	fetchData = () => {
		axios
			.get('/api/data') // You can simply make your requests to "/api/whatever you want"
			.then(response => {
				// handle success
				console.log(response.data); // The entire response from the Rails API

				console.log(response.data.message); // Just the message
				this.setState({
					message: response.data.message,
				});
			});
	};

	render() {
		return (
			<BrowserRouter>
				<Route path='/' component={Dropzone} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/library' component={Booklist} />
				<Route path='/wordlist' component={Wordlist} />
			</BrowserRouter>
		);
	}
}

export default App;


