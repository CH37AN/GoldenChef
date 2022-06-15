import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "../App.css";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
let history = useHistory();
  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3005/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3005/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3005/login").then((response) => {
      if (response.data.loggedIn === true) {
        window.location.assign('/main');
        setLoginStatus(response.data.user[0].username);
        
        
      }
    });
  }, []);

  return (
    <div className="login">
      
  <div className="bg" />
  <div className="bg bg2" />
  <div className="bg bg3" />
  <div className="container">
    <form className="form" id="login">
      <h1 className="form__title">Login</h1>
      <div className="form__message form__message--error" />
      <div className="form__input-group">
        <input type="text" className="form__input" autofocus placeholder="Username or email" onChange={(e) => {
            setUsername(e.target.value);
          }}/>
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input type="password" className="form__input" autofocus placeholder="Password" onChange={(e) => {
           setPassword(e.target.value);
          }}/>
        <div className="form__input-error-message" />
      </div>
      <button className="form__button" type="submit" onClick={login}>Continue</button>
      <p className="form__text">
        <a>{loginStatus}</a>
      </p>
      <p className="form__text">
        <a className="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
      </p>
    </form>
    <form className="form form--hidden" id="createAccount">
      <h1 className="form__title">Create Account</h1>
      <div className="form__message form__message--error" />
      <div className="form__input-group">
        <input type="text" id="signupUsername" className="form__input" autofocus placeholder="Username" onChange={(e) => {
           setUsernameReg(e.target.value);
          }}/>
        <div className="form__input-error-message" />
      </div>
      {/* <div className="form__input-group">
        <input type="text" className="form__input" autofocus placeholder="Email Address" />
        <div className="form__input-error-message" />
      </div> */}
      <div className="form__input-group">
        <input type="password" className="form__input" autofocus placeholder="Password" onChange={(e) => {
         setPasswordReg(e.target.value);
          }}/>
        <div className="form__input-error-message" />
      </div>
      {/* <div className="form__input-group">
        <input type="password" className="form__input" autofocus placeholder="Confirm password" />
        <div className="form__input-error-message" />
      </div> */}
      <button className="form__button" type="submit" onClick={register}>Continue</button>
      <p className="form__text">
        <a className="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
      </p>
    </form>
  </div>
</div>
  //   <div className="App">
  //     <div className="registration">
  //       <h1>Registration</h1>
  //       <label>Username</label>
  //       <input
  //         type="text"
  //         onChange={(e) => {
  //           setUsernameReg(e.target.value);
  //         }}
  //       />
  //       <label>Password</label>
  //       <input
  //         type="text"
  //         onChange={(e) => {
  //           setPasswordReg(e.target.value);
  //         }}
  //       />
  //       <button onClick={register}> Register </button>
  //     </div>

  //     <div className="login">
  //       <h1>Login</h1>
  //       <input
  //         type="text"
  //         placeholder="Username..."
  //         onChange={(e) => {
  //           setUsername(e.target.value);
  //         }}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password..."
  //         onChange={(e) => {
  //           setPassword(e.target.value);
  //         }}
  //       />
  //       <button onClick={login}> Login </button>
  //     </div>

  //     <h1>{loginStatus}</h1>




     

  //   </div>
  );
}


// export default auth;