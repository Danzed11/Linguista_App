import React, { Component } from 'react';
import '../stylesheets/home.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";import '../stylesheets/nav.css';

class Home extends Component {
  render() {
     
    return (
      <body>
        <div className="homepage">
          <div className="content-container">
            <div className="homelogo">
              <img src={require("../images/linguista-large-logobop.png")} alt=""/>
            </div>
              <div>
              <Link to ="/dashboard"><button className="btn-con">Login</button></Link>
              <Link to ="/dashboard"><button className="btn-con">Register</button></Link>
              </div>
              <div className="overlay"></div>
             </div>       
        </div>
      </body>
      )
    }

}

export default Home