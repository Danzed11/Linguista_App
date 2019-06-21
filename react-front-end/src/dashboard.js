import React, { Component } from 'react';

import './stylesheets/App.css';

import Nav from './nav.js';
import Booklist from './bookList.js';
import Wordlist from './wordList.js';
import Dropzone from './dropZone.js';
import Flashcard from './flashcard.js';

class Dashboard extends Component {
  render(){
    return (
         <div className="App">
           <Nav />
           <Booklist />
           <Dropzone />
           <Flashcard />
           <Wordlist />
         </div>
       );
   }
}

export default Dashboard;