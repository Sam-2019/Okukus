import React from "react";
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
    />
  );
};

export default Input;
