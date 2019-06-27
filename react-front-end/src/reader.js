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

  translationHandler(input) {
    let url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyD0A7tw-SVBIHFZwEH12i2SS__8LviSfFE&q=${input}&target=fr`
     axios
      .get(url) // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        console.log(`${input}: ${response.data.data.translations[0].translatedText}`)
        });
  }
  componentWillMount() {
    let url = `/getchapter/${this.props.match.params.book}/${this.props.match.params.chapter}`
    axios
      .get(url) // You can simply make your requests to "/api/whatever you want"
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
    } else if (this.state.words == "") {
      return (<div>No response from database.</div>)
    } else {
      return (
        <div className="chapter-div">
          {this.state.words.map((word, index) => {
            return <Word keyprop={index} foreign={word.word}/>
          })
          }
          {/*{this.state.words}*/}
        </div>
          )
    }
  }
}

export default Reader;

