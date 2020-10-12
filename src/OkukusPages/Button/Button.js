import React from "react";
import "./button.css";

const Button = ({ classname, action, name }) => {
  return (
    <button className={classname} onClick={action}>
      {name}
    </button>
  );
};

export default Button;
