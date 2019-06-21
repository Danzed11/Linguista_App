import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import DragAndDrop from './drag_and_drop.js';
import FileList from './file_list.js';
import './stylesheets/App.css';

import Nav from './components/nav.js';
import Dashboard from './dashboard.js';
import Booklist from './bookList.js';
import Wordlist from './wordList.js';
import Study from './study.js'

// import Dropzone from './components/dropZone.js';
// import Flashcard from './components/flashcard.js';

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
				<Route path='/' component={Nav} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/library' component={Booklist} />
				<Route path='/wordlist' component={Wordlist} />
				<Route path='/study' component={Study} />
			</BrowserRouter>
		);
	}
}

export default App;
