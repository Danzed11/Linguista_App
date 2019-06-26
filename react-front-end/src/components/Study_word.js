import React, { Component } from 'react';

class Study_word extends Component {
  render() {
    return (
      <div className="word">
        {this.props.foreign} - {this.props.english}
        <button>Delete</button>
      </div>
    );
  }
}

export default Study_word;