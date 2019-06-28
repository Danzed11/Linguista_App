import React, { Component } from 'react';
import Nav from './components/nav.js';
import axios from 'axios';
import { BrowserRouter as Link } from 'react-router-dom';
import './stylesheets/booklist.css';
import UploadForm from './components/epubUploadForm.js';

class Booklist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}
	componentWillMount() {
		axios
			.get('/books/data') // You can simply make your requests to "/api/whatever you want"
			.then(response => {
				this.setState({
					books: response.data,
					loading: false,
				});
			});
	}
	render() {
		if (!this.state.loading) {
			return (
				<div className="App">
					<Nav />
					<div>
						<div className="library-page">
							<div className="content">
								<h1>This is the booklist</h1>
								{this.state.books.map(book => {
									let url = `/reader/${book.id}/3`;
									return (
										<div>
											<Link to={url}>{book.title}</Link>
										</div>
									);
								})}
							</div>

							<div className="upload">
								<UploadForm />
							</div>
						</div>
					</div>
				</div>
			);
		} else if (this.state.books === '') {
			return (
				<fragment>
					<Nav />
					<div>You don't have any books uploaded yet.</div>
					<UploadForm />
				</fragment>
			);
		} else {
			return (
				<fragment>
					<Nav />
					<div>Loading</div>
					<UploadForm />
				</fragment>
			);
		}
	}
}

export default Booklist;
