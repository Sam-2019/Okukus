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
  max,
  maxLength,
  min,
  minLength,
}) => {

  // if (type === "number") {
  //   maxLength = null;
  //   minLength = null;
  // } else if (type === "password" || "search" || "tel" || "text" || "url") {
  //   max = null;
  //   min = null;
  // }

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
      max={max}
      maxLength={maxLength}
      min={min}
      minLength={minLength}
    />
  );
};

export default Input;
