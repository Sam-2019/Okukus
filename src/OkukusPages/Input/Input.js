import React from "react";
import "./input.css";

const Input = ({ type, placeholder, classname, value, action, click }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classname}
      onChange={action}
      onClick={click}
      value={value}
    />
  );
};

export default Input;
