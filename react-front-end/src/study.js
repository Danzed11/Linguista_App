import React, { Component } from 'react';
import axios from 'axios';
import flashcard from './flashcard_helper';

//Component that houses flashcard game.

class Study extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!',
      flashcardInstance: new flashcard([{
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
        }]),
      displayCard: {
          user_id: 1,
          foreign_word: 'bonjour',
          english_word: 'hello',
          interval: 3
        }
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

  newCard = () => {
    this.setState({displayCard: this.state.flashcardInstance.card()})
  }

  render() {
    if (this.state.displayCard) {
      return (
        <div className="App">
          <h1>{ this.state.message }</h1>
          <button onClick={this.newCard} >
            New Card
          </button>
          <p>
            {this.state.displayCard.foreign_word}<br/>
            {this.state.displayCard.english_word}
          </p>
        </div>
      );
    } else {
      return (<div className="App">
          <h1>{ this.state.message }</h1>
          <button onClick={this.newCard} >
            New Card
          </button>
        </div>)
    }
  }
}

export default Study;