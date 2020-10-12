import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Input from "../Input/Input";
import Primary from "../Button/Primary";
import Secondary from "../Button/Secondary";
import "./user.css";

function SignUp() {
  const { registerUser, isLoggedIn } = useAuthentication();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password0, setPassword0] = useState("");
  const [password1, setPassword1] = useState("");

  const [error, setError] = useState("");

  let history = useHistory();

  const clearSignup = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword0("");
    setPassword1("");
  };

  const signup = async (event) => {
    setError();
    event.preventDefault();
    var formData = new FormData();

    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email);
    formData.set("password0", password0);
    formData.set("password1", password1);

    const data = await registerUser(formData);
    console.log(data);

    if (data.error === true) {
      setError(data.message);
    } else {
      localStorage.setItem("loginToken", data.buyer.token);
      isLoggedIn();
      clearSignup();
    }
  };

  return (
    <div className="user_wrapper ">
      <div className="user_form">
        <h2>Sign Up</h2>

        <Input
          type={"text"}
          placeholder={"First Name"}
          classname={"input"}
          action={(e) => setFirstName(e.target.value)}
          value={firstname}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="input"
          onChange={(e) => setLastName(e.target.value)}
          value={lastname}
        />
        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="input"
          onChange={(e) => setPassword0(e.target.value)}
          value={password0}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="input"
          onChange={(e) => setPassword1(e.target.value)}
          value={password1}
        />
      </div>

      <div className="message_wrapper ">
        {error ? <div className="user_message "> {error}</div> : null}
      </div>

      <div className="button_wrapper ">
        <Primary name="Sign up" action={signup} />

        <Secondary
          name="Sign in"
          action={() => {
            history.push("/login");
          }}
        />
      </div>
    </div>
  );
}

export default SignUp;
