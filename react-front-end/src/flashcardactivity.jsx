import React, { Component } from 'react';
import axios from 'axios';
import flashcard from './flashcard_helper';
import './stylesheets/flashcard.css';

//Component that houses flashcard game.

//Replace this.state.testDB with nothing
//On component did mount, do a fetchData, and send that directly
//into a setState creating a new flashcard class.

class FlashcardActivity extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startPage: true,
			showAnswer: false,
			message: 'Click the button to load data!',
		};
	}

	fetchData = () => {
		axios
			.get('/words/data') // You can simply make your requests to "/api/whatever you want"
			.then(response => {
				this.setState({
					cardlist: response.data,
				});
			})
			.then(response => {
				this.setState({
					flashcardInstance: new flashcard(this.state.cardlist),
				});
			});
	};
	componentDidMount() {
		this.fetchData();
	}
	startUp = () => {
		this.setState({
			displayCard: this.state.flashcardInstance.card(),
			startPage: false,
		});
	};

	newCard = () => {
		this.setState({
			displayCard: this.state.flashcardInstance.card(),
			showAnswer: false,
		});
	};

	displayAnswer = () => {
		this.setState({ showAnswer: true });
	};

	render() {
		if (this.state.startPage) {
			return (
				<div className="flashcard-game">
					<div className="game-container">
						<div className="content">
							<h2> Start Studying </h2>
							<button id="answer-btn" onClick={this.startUp}>
								Begin
							</button>
						</div>
					</div>
				</div>
			);
		}
		if (!this.state.showAnswer) {
			return (
				<div className="flashcard-game">
					<div className="game-container">
						<div className="content">
							<h1>Card: {this.state.displayCard.round}</h1>
							<h2>{this.state.displayCard.foreign_word}</h2>
							<hr />
							<button id="answer-btn" onClick={this.displayAnswer}>
								Show answer!
							</button>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="flashcard-game">
					<div className="game-container">
						<div className="content">
							<h1>Card: {this.state.displayCard.round}</h1>
							<h2>{this.state.displayCard.foreign_word}</h2>
							<hr />
							<h2>{this.state.displayCard.english_word}</h2>
						</div>

						<div className="answer-btns">
							<button id="hard" onClick={this.newCard}>
								Couldn't remember
							</button>
							<button id="medium" onClick={this.newCard}>
								Barely Got it
							</button>
							<button id="easy" onClick={this.newCard}>
								Easy to answer
							</button>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default FlashcardActivity;
