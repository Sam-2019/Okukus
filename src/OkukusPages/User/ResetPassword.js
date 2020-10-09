import React, { useState } from "react";
import { useAuthentication } from "../Auth/Context";
import Primary from "../Button/Primary";
import "./user.css";

function Login() {
  const { resetUserAccount } = useAuthentication();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const reset = () => {
    setEmail("");
  };

  const send = async (event) => {
    setMessage();
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_email", email);

    const data = await resetUserAccount(formData);
    console.log(data);

    if (data.data.error === true) {
      setMessage(data.data.message);
    } else if (data.data.error === false) {
      setMessage(data.data.message);
      reset();
    }
  };

  return (
    <div className=" user_wrapper">
      <div className="user_form  ">
        <h2>Account Reset</h2>

        <input
          type="email"
          placeholder="Email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="true"
        />
      </div>

      <div className="message_wrapper ">
        {message ? <div className=" user_message "> {message}</div> : null}
      </div>

      <div className="button_wrapper ">
        <Primary name="Submit" action={send} />
      </div>
    </div>
  );
}

export default Login;
