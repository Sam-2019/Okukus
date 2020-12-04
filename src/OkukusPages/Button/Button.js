import React from "react";
import Spinner from "../Spinner/Spinner";
import "./button.css";

const Button = ({ class_name, action, name, loading }) => {
  return (
    <button
      className={loading ? "inactive" : class_name}
      onClick={action}
      disabled={loading}
    >
      {loading ? (
        <Spinner small="spinner-border-sm" size="medium" />
      ) : (
        `${name}`
      )}
    </button>
  );
};

export default Button;
