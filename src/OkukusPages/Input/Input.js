import React from "react";
import PropTypes from "prop-types";
import "./input.css";

const Input = ({
  type,
  placeholder,
  class_name,
  content,
  action,
  click,
  unique,
  unique_name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={class_name}
      onChange={action}
      onClick={click}
      value={content}
      id={unique}
      name={unique_name}
      autoComplete="true"
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  class_name: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.func,
  click: PropTypes.func,
  unique: PropTypes.number,
  unique_name: PropTypes.string,
};
