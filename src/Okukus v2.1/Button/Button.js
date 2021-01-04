import React from "react";
import "./button.css";

const Button = ({ class_name, action, name }) => {
  return (
    <button className={class_name} onClick={action}>
      {name}
    </button>
  );
};

export default Button;
