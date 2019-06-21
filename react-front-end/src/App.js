import React, { Component } from 'react';
import axios from 'axios';
import DragAndDrop from './drag_and_drop.js';
import FileList from './file_list.js';
import './stylesheets/App.css';
import Nav from './nav.js';
import Booklist from './bookList.js';
import Wordlist from './wordList.js';
import Dropzone from './dropZone.js';
import Flashcard from './flashcard.js';

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
      <div>
      <div className="App">
        <h1> {this.state.message} </h1>
        <button onClick={this.fetchData} >
          Fetch Data
        </button>        
        <h2>Test</h2>
        <DragAndDrop />
        <FileList />
      </div>
  
			<div className="App">
				<Nav />
				<Booklist />
				<Dropzone />
				<Flashcard message={this.state.message} />
				<Wordlist />
			</div>
      </div>
		);
	}
}

export default App;
