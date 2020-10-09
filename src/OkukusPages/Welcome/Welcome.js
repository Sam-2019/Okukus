import React, { useState, useEffect } from "react";
import "./welcome.css";

const Message = ({ show }) => {
  return (
    <>
      <div>Welcome to OKUKUS.com</div>
      <div>Please give us your email wai</div>

      <form onSubmit={show}>
        <input
          className="welcome_input"
          type="email"
          placeholder="example@gmail.com"
        />
        <button className="welcome_button">Send</button>
      </form>
    </>
  );
};

const Thanks = () => {
  return <div className="thanks">Thanks</div>;
};

const Welcome = () => {
  const [welcome, setWelcome] = useState(false);

  const [message, setMessage] = useState(false);

  const show = () => {
    console.log("hi");
    setMessage(true);
  };

  const close = () => {
    setWelcome(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {welcome && (
        <div className="welcome ">
          <div className="welcome_wrapper  ">
            {/* <div className="x-circle item">
          <svg
            viewBox="0 0 16 16"
            className="bi bi-x-circle"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div> */}

            <div className="item-top " onClick={close}>
              <div className=" ">
                <svg
                  viewBox="0 0 16 16"
                  className="bi bi-x-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>

            <div className="welcome_message ">
              {message ? <Thanks /> : <Message show={show} close={close} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
