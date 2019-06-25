import React, { Component } from 'react';
import Word from './components/word.js';

import axios from 'axios';
import './stylesheets/wordlist.css';

class Reader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentWillMount() {
    axios
      .get('/testbook/data') // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        this.setState({
          words: response.data,
          loading: false,
        });
      });
  }
  render() {
    if (this.state.loading) {
      return (<div>Wordlist Loading...</div>);
    } else {
      return (
        <div className="chapter-div">
          {this.state.words.map((word, index) => {
            if (index % 65 == 0){
              return (<fragment>
              <span className="wordtest"
              key={index}
              word={word.word}>{word.word} </span>
              <br/>
              <br/>
              </fragment>)
            } else {
              return (<span className="wordtest" key={index} word={word.word}>{word.word} </span>)
            }
          }

          )}
        </div>
      );
    }
  }
}

export default Reader;

