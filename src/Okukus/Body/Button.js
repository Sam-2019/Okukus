import React from "react";
import "./body.css";

const Button = (props) => {
  return (
    <>
    <button
      className={props.active ? " button button-view " : " button"}
      onClick={props.onClick}
    >
      {props.title}
    </button>
    
    </>
  );
};

export default Button;
