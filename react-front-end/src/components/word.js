import React, { Component } from 'react';
import axios from 'axios';
//Word component for ereader, fills chapters and allows for clicking of words.

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      translated: false
    };
  }

  translationHandler(input) {
    let url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyD0A7tw-SVBIHFZwEH12i2SS__8LviSfFE&q=${input}&target=en`
    let output = {}

    axios
      .get(url) // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        let tx = response.data.data.translations[0].translatedText
        this.setState({translated: true, translation: tx});
        // return axios.post('/studylist', {original: input, translation: tx}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        return axios({
          method: 'post',
          url: '/studylist',
          data: {
            original: input,
            translation: tx
          },
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
      })
      .then(response => {return response});
  }

  render() {
    if (this.state.translated) {
      return (
        <div key={this.props.keyprop} word={this.props.foreign} className="translated-pair">
          <div className="translated-word">{this.state.translation} </div>
          <div className="untranslated-word">{this.props.foreign} </div>
        </div>
      );
    } else {
      return (
        <span className="wordtest" key={this.props.keyprop} word={this.props.foreign} onClick={() => this.translationHandler(this.props.foreign)}>
          {this.props.foreign} </span>
      );}
  }
}

export default Word;