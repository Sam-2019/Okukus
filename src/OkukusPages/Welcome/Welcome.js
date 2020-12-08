import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAuthentication } from "../Auth/Context";
import "./welcome.css";

// const Message = ({ show }) => {
//   const [email, setEmail] = useState("");

//   const { welcomeUser } = useAuthentication();

//   const clear = () => {
//     setEmail("");
//   };

//   const submit = async (event) => {
//     setEmail();
//     event.preventDefault();
//     var formData = new FormData();

//     formData.set("visitor_email", email);

//     const data = await welcomeUser(formData);
//     console.log(data);

//     if (data.error === true) {
//     } else {
//       clear();
//       show();
//     }
//   };

//   return (
//     <>
//       <div>Welcome to OKUKUS.com</div>
//       <div>Please give us your email wai</div>

//       <form onSubmit={submit}>
//         <input
//           className="welcome_input"
//           type="email"
//           placeholder="example@gmail.com"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button className="welcome_button">Send</button>
//       </form>
//     </>
//   );
// };

// const Thanks = () => {
//   return <div className="thanks">Thanks</div>;
// };

const Welcome = () => {
  const { welcomeUser } = useAuthentication();

  const [welcome, setWelcome] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState("");
  const number = uuidv4();

  const close = () => {
    setWelcome(false);
  };

  const clear = () => {
    setEmail("");
  };

  const submit = async (event) => {
    setEmail();
    event.preventDefault();
    var formData = new FormData();

    formData.set("visitor_email", email);

    const data = await welcomeUser(formData);

    if (data.error === true) {
      return;
    } else if (data.data.message) {
      setMessage(data.data.message);
      clear();
      sessionStorage.setItem("key", number);
    }
  };

  const checkSession = () => {
    let sessionKey = sessionStorage.getItem("key");

    if (sessionKey) {
      setWelcome(false);
    } else setWelcome(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkSession();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {welcome && (
        <div className="welcome  ">
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

            <div className="welcome_message  ">
              {message ? (
                <>{message}</>
              ) : (
                <>
                  <div className='welcome_company'>Welcome to OKUKUS.com</div>
                  <div>
                    Subscribe to our newsletter to get updates on our latest
                    offers!
                  </div>

                  <form onSubmit={submit}>
                    <input
                      className="welcome_input"
                      type="email"
                      placeholder="example@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="welcome_button">Send</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
