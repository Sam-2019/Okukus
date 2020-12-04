import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../Context/authContext";
import "./user.css";

function Login() {
  const { loginUser, isLoggedIn } = useContext(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const clearLogin = () => {
    setEmail("");
    setPassword("");
  };

  const LogIn = async (event) => {
    setError();
    event.preventDefault();
    var formData = new FormData();

    formData.set("email", email);
    formData.set("password", password);

    const data = await loginUser(formData);
    if (data.error === true) {
      setError(data.message);

    } else {
      localStorage.setItem("loginToken", data.token);
      isLoggedIn();
      clearLogin();
    }

  };

  return (
    <div className="sign-in-container  shadow">
      <form action="#" className="user_form ">
        <h2>Sign In</h2>
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
          autoComplete="true"
        />

        <input
          type="password"
          placeholder="Password"
          className="user_input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          autoComplete="true"
        />

        {error ? <div className="mt-3 mb-2 error"> {error}</div> : null}

        {/* <a href="#">Forgot your password?</a> */}
        <div className="mt-3">
          <NavLink to="/signup" className="user_button up mr-3">
            Sign Up
          </NavLink>

          {/* <button className="user_button up mr-3 " onClick={handler}>
            Sign In
          </button> */}

          <button className="user_button in" onClick={LogIn}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
