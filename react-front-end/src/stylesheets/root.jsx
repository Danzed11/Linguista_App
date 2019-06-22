import React, { Component } from 'react';
import '../stylesheets/nav.css';

class landing extends Component {
  render() {
    return (
      <nav>
        <div className="nav-left">
          {/* <h1>Linguista</h1> */}
          <img src="../images/logoSMWhite.png" alt="Linguista" />
        </div>
        <div className="nav-right">
          <h4>Hi User</h4>
        </div>
      </nav>
    );
  }
}

export default landing;
