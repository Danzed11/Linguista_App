import React, { Component } from 'react';
import '../stylesheets/wordlist.css';

class DashboardWordlist extends Component {
	render() {
		return (
			<div className="wordlistContainer-dashboard">
				<div className="content-container">
					<p>
						Use the ePub uploader in your dashboard to save a book to your
						library and begin improving your foreign language comprehension.
					</p>
					<ul>
						<p>
							<li>
								Click any word and receive a{' '}
								<div className="bold-words">live translation</div> instantly
							</li>
						</p>
						<p>
							<li>
								Practice these words with{' '}
								<div className="bold-words">flashcards</div>
							</li>
						</p>
					</ul>
					<p>Welcome to Linguista. The easier way to learn languages.</p>
				</div>
				<div className="overlay" />
			</div>
		);
	}
}

export default DashboardWordlist;
