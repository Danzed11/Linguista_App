import React, { Component } from 'react';
import '../stylesheets/home.css';
class Home extends Component {
  render() {
     
    return (
      <body>
        <div className="homepage">
          <div className="content-container">
            <div className="homelogo">
              <img src={require("../images/linguista-large-logobop.png")} alt=""/>
            </div>
              <div className="btn-con">
                <button>Login</button>
                <button>Register</button>
              </div>
              <div className="overlay"></div>
             </div>       
        </div>
      </body>
      )
    }

}

export default Home