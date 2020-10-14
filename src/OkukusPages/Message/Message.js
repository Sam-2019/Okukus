import React from "react";
import "./message.css";

const Message = ({ message, classname }) => {
  return (
    <div className="message_wrapper">
      <div className={classname}>{message} </div>
    </div>
  );
};

export default Message;
