import "./Login.css"
import React from 'react'
export default function login() {
  return(
    <div className="logo">
      <div className="logo-login">
        <img 
        className="login-logo"
        src="mainlogo"
        alt="logo"/>
          <div className="nameapp">
            HOGWART 
          </div>
      </div>

      <div className="login-page">
        <div className="container">
          <div className="left">
            <div className="login">LOGIN</div>
            <div className="slogan">Hello! Welcome to blabla</div>

      <div className="page">
        <div className="from">
          <div className="login-from">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
            <p className="message">Forgot your password? <a href=" ">Forgot password</a>
            </p>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
     </div>
    )
}