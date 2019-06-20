import React, { Component } from 'react';
import axios from 'axios';
import flashcard from './flashcard_helper';

//Component that houses flashcard game.

//Replace this.state.testDB with nothing
//On component did mount, do a fetchData, and send that directly
//into a setState creating a new flashcard class.

class Study extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startPage: true,
      showAnswer: false,
      testDB: [{
        user_id: 1,
        foreign_word: 'bonjour',
        english_word: 'hello',
        interval: 3
        },
        {
        user_id: 1,
        foreign_word: 'dancer',
        english_word: 'dance',
        interval: 2
        },
        {
        user_id: 1,
        foreign_word: 'manger',
        english_word: 'eat',
        interval: 2
        },
        {
        user_id: 1,
        foreign_word: 'cocasse',
        english_word: 'comical',
        interval: 1
        },
        {
        user_id: 1,
        foreign_word: 'mechant',
        english_word: 'mean',
        interval: 1
        },
        {
        user_id: 1,
        foreign_word: 'parle',
        english_word: 'speak',
        interval: 1
        },
        {
        user_id: 1,
        foreign_word: 'edifice',
        english_word: 'building',
        interval: 1
        }],
      message: 'Click the button to load data!',
      displayCard: {
          round: 1,
          user_id: 1,
          foreign_word: 'bonjour',
          english_word: 'hello',
          interval: 3},
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    })
  }
  componentDidMount() {
    this.setState({flashcardInstance: new flashcard(this.state.testDB)})
  }
  startUp = () => {
    this.setState({startPage: false})
  }

  newCard = () => {
    this.setState({
      displayCard: this.state.flashcardInstance.card(),
      showAnswer: false
    })
  }

  displayAnswer = () => {
    this.setState({showAnswer: true})
  }

  render() {
    if (this.state.startPage) {
      return (
        <div className="flashcard-game">
          <h2> Start Studying </h2>
          <button onClick={this.startUp} >
            Begin
          </button>
        </div>
        )
    }
    if (!this.state.showAnswer) {
      return (
        <div className="App">
          <h1>Card: { this.state.displayCard.round }</h1>
          <h2>{ this.state.displayCard.foreign_word}</h2>
          <hr/>
          <button onClick={this.displayAnswer} >
            Show answer!
          </button>
        </div>
      );
    } else {
      return (<div className="App">
          <h1>Card: { this.state.displayCard.round }</h1>
          <h2>{ this.state.displayCard.foreign_word}</h2>
          <hr/>
          <h2>{ this.state.displayCard.english_word}</h2>
          <button onClick={this.newCard} >
            Couldn't remember
          </button>
          <button onClick={this.newCard} >
            Barely Got it
          </button>
          <button onClick={this.newCard} >
            Easy to answer
          </button>
        </div>)
    }
  }
}

export default Study;