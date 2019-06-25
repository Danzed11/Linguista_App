import React, { Component } from 'react';
import '../stylesheets/wordlist.css';

class DashboardWordlist extends Component {
	render() {
		return (
			<div className="wordlistContainer-dashboard">
				<div className="content-container">
					<h1>Welcome to Linguista</h1>
					<p>
						Improve your foreign language comprehension by reading
						<strong> your </strong>books.
					</p>
					<p>
						Drag and Drop your e-pub to save it in your library. When you're
						ready to read, click on the book you want to read and read to your
						heart's content.
					</p>
					<p>
						When you're stuck, click on the word to see the translation. This
						will save it for you to reference later. When you're ready to do
						some studying, go to the flashcard page. While playing, you can rate
						how hard that word was for you to keep it in your word list. you can
						also study your wordlist and delete words from it at your leisure.
					</p>
					<p>Enjoy Languista and read your way to understanding</p>
				</div>
				<div className="overlay" />
			</div>
		);
	}
}

export default DashboardWordlist;
