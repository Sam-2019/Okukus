import React from "react";
import PropTypes from "prop-types";
import "./message.css";

const Message = ({ message, class_name }) => {
  return (
    <div className="message_wrapper">
      <div className={class_name}>{message} </div>
    </div>
  );
};

export default Message;

Message.propTypes = {
  message: PropTypes.string,
  class_name: PropTypes.string,
};
