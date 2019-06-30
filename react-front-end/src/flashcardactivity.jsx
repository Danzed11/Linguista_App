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

	easyAnswer = () => {
		let targetCard = this.state.displayCard
		if (targetCard.interval < 3) {
			targetCard.interval++
			axios({
          method: 'put',
          url: '/studylist',
          data: {targetCard},
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
				.then(res => this.newCard())
				.catch(err => {return err})
		}
		else {this.newCard()}
	};

	monderateAnswer = () => {
		let targetCard = this.state.displayCard
		if (targetCard.interval === 3) targetCard.interval--
		if (targetCard.interval < 3) targetCard.interval++
		axios({
          method: 'put',
          url: '/studylist',
          data: {targetCard},
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
			.then(res => this.newCard())
			.catch(err => {return err})
	};

	hardAnswer = () => {
		let targetCard = this.state.displayCard
		if (targetCard.interval !== 1) {
			targetCard.interval = 1;
			axios({
          method: 'put',
          url: '/studylist',
          data: {targetCard},
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
				.then(res => this.newCard())
				.catch(err => {return err})
		} else {this.newCard()}

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
							<button onClick={this.startUp}>Begin</button>
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
							<button onClick={this.displayAnswer}>Show answer!</button>
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
							<button onClick={this.hardAnswer}>Couldn't remember</button>
							<button onClick={this.monderateAnswer}>Barely Got it</button>
							<button onClick={this.easyAnswer}>Easy to answer</button>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default FlashcardActivity;
