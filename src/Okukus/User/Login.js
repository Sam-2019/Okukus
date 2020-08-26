import React, { useContext, useState } from "react";
import { auth } from "./authContext";
import "./user.css";

function Login({handler}) {
  const { toggleNav, loginUser, isLoggedIn, isAuth } = useContext(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const clearLogin = () => {
    setEmail("");
    setPassword("");
  };

  const LogIn = async (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("email", email);
    formData.set("password", password);

    const data = await loginUser(formData);
    console.log(data);
    if (data.error === true) {
      console.log(data.message);
      setError(data.message);
    } else {
      localStorage.setItem("loginToken", data.token);
      isLoggedIn();
      console.log(data);
      console.log(isAuth);
    }
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

        <div className="text-danger mt-3"> {error}</div>

        {/* <a href="#">Forgot your password?</a> */}
        <div>
          <button className="user_button up mr-3" onClick={handler}>
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
}

export default Login;
