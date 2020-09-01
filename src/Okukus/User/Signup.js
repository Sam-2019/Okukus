import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../Context/authContext";
import "./user.css";

function SignUp() {
  const { registerUser, isLoggedIn } = useContext(auth);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password0, setPassword0] = useState("");
  const [password1, setPassword1] = useState("");

  const [error, setError] = useState("");

  const clearSignup = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword0("");
    setPassword1("");
  };

  const SignUp = async (event) => {
    setError();
    event.preventDefault();
    var formData = new FormData();

    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email);
    formData.set("password0", password0);
    formData.set("password1", password1);

    const data = await registerUser(formData);
    if (data.error === true) {
      setError(data.message);
    } else {
      localStorage.setItem("loginToken", data.buyer.token);
      console.log(window.localStorage);
      isLoggedIn();
      clearSignup();
    }


  };

  return (
    <div className="sign-up-container shadow ">
      <form action="#" className="user_form">
        <h2>Sign Up</h2>
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
          placeholder="Confirm Password"
          className="user_input"
          onChange={(e) => setPassword1(e.target.value)}
          value={password1}
        />
        {error ? <div className="mt-3 mb-2 error"> {error}</div> : null}

        <div className="mt-3">
          <NavLink to="/login" className="user_button up mr-3">
            Sign In
          </NavLink>

          {/* <button className="user_button up mr-3 " onClick={handler}>
            Sign In
          </button> */}
          <button className="user_button in" onClick={SignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
