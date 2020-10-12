import React from "react";
import "./message.css";

const Message = ({ message, classname }) => {
  return <div className={classname}>{message} </div>;
};

export default Message;
