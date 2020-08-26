import React, { useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { useAuth } from "./useAuth";
import "./user.css";

const User = () => {
  const [state, setstate] = useState(true);

  const handler = () => {
    setstate(!state);
  };

  return (
    <div className="user">
      {state ? <Login handler={handler} /> : <SignUp handler={handler} />}
    </div>
  );
};

export default User;

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = useAuth();

  let history = useHistory();

  const clearLogin = () => {
    setEmail("");
    setPassword("");
  };

  const LogIn = (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("email", email);
    formData.set("password", password);

    auth
      .loginUser(formData)

      .then(() => {})

      .catch((error) => {
        console.log(error);
      });

    clearLogin();
    setError("");
  };

  const checkToken = async () => {
    console.log(localStorage);
  };

  return (
    <div className="sign-in-container  shadow">
      <form action="#" className="user_form ">
        <h2>Sign in</h2>
        {/* <div className="social-container" hidden>
          <a href="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </div> */}
        <div className="user_text" hidden>
          or use your account
        </div>

        <input
          type="email"
          placeholder="Email"
          className="user_input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input
          type="password"
          placeholder="Password"
          className="user_input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <div className="text-danger mt-3"> {auth.error}</div>

        {/* <a href="#">Forgot your password?</a> */}
        <div>
          <button className="user_button up mr-3" onClick={props.handler}>
            Sign Up
          </button>
          <button className="user_button in" onClick={LogIn}>
            Sign In
          </button>
        </div>
        <button onClick={checkToken}>cool</button>
      </form>
    </div>
  );
};

const SignUp = (props) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password0, setPassword0] = useState("");
  const [password1, setPassword1] = useState("");

  const [error, setError] = useState("");

  const auth = useAuth();
  let history = useHistory();

  const clearSignup = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword0("");
    setPassword1("");
  };

  const SignUp = (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email);
    formData.set("password0", password0);
    formData.set("password1", password1);

    auth
      .registerUser(formData)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(firstname, lastname, email, password0, password1);
    clearSignup();
    setError("");
  };

  return (
    <div className="sign-up-container shadow ">
      <form action="#" className="user_form">
        <h2>Create Account</h2>
        {/* <div className="social-container" hidden>
          <a href="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </div> */}
        <div className="user_text" hidden>
          or use your email for registration
        </div>
        <input
          type="text"
          placeholder="First Name"
          className="user_input"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstname}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="user_input"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
        />
        <input
          type="email"
          placeholder="Email"
          className="user_input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="user_input"
          onChange={(e) => setPassword0(e.target.value)}
          value={password0}
        />
        <input
          type="password"
          placeholder="Password"
          className="user_input"
          onChange={(e) => setPassword1(e.target.value)}
          value={password1}
        />
        <div className="text-danger mt-3"> {error ? `${error}` : " "}</div>
        <div>
          <button className="user_button up mr-3 " onClick={props.handler}>
            Sign In
          </button>
          <button className="user_button in" onClick={SignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
