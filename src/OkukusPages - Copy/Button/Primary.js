import React from "react";
import "./button.css";

const Button = ({ name, action }) => {
  return (
    <button className="primary" onClick={action}>
      {name}
    </button>
  );
};

export default Button;
