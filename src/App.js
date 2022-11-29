import logo from './logo.svg';
import './App.css';
import profile from "./images/user.png";
import email from "./images/mail.png";
import pass from "./images/pass.png";

import React from 'react'

export default function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>

            </div>

          </div>
          <div>
          <h1> Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
               <input type="text" placeholder="Enter User Name" className="name"/>
            </div>
            <div className="second-input"/>
            <div>
              <img src={pass} alt="pass" className="pass"/>
               <input type="text" placeholder="Enter Password" className="name"/>
            </div>
            <div className="login-button"> 
            <button>Login</button>
            </div>
           
          
            <p className="link">
              <a href="#">Forgot Password?</a> Or <a href="#">Sign Up</a>
            </p>
           
        
          </div>
        </div>
      </div>
  </div>
  )
}
