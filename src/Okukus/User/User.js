import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./user.css";

const User = () => {
  const [state, setstate] = useState(true);

  const handler = () => {
    setstate(!state);
  };

  return (
    <div className="">
      <div className="user ">
        {state ? <Login handler={handler} /> : <SignUp handler={handler} />}
      </div>
    </div>
  );
};

export default User;

const Login = (props) => {
  return (
    <div className="sign-in-container  shadow">
      <form action="#" className="user_form ">
        <h2>Sign in</h2>
        <div className="social-container" hidden>
          <a href="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </div>
        <div className="user_text" hidden>
          or use your account
        </div>
        <input type="email" placeholder="Email" className="user_input" />
        <input type="password" placeholder="Password" className="user_input" />
        <a href="#">Forgot your password?</a>
        <div>
          <button className="user_button up mr-3" onClick={props.handler}>
            Sign Up
          </button>
          <button className="user_button in">Sign In</button>
        </div>
      </form>
    </div>
  );
};

const SignUp = (props) => {
  return (
    <div className="sign-up-container shadow ">
      <form action="#" className="user_form">
        <h2>Create Account</h2>
        <div className="social-container" hidden>
          <a href="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </div>
        <div className="user_text" hidden>
          or use your email for registration
        </div>
        <input type="text" placeholder="First Name" className="user_input" />
        <input type="text" placeholder="Last Name" className="user_input" />
        <input type="email" placeholder="Email" className="user_input" />
        <input type="password" placeholder="Password" className="user_input" />
        <input
          type="password"
          placeholder="Confrim Password"
          className="user_input"
        />
        <div className="signin"></div>
        <div>
          <button className="user_button up mr-3 " onClick={props.handler}>
            Sign In
          </button>
          <button className="user_button in">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
