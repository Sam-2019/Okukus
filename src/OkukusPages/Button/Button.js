import React from "react";
import Spinner from "../Spinner/Spinner";
import "./button.css";

const Button = ({ class_name, action, name, loading }) => {
  // switch (loading && class_name ) {
  //   case "primary":
  //     className = "inactivePRI";
  //     break;
  //   case "secondary":
  //     className = "inactiveSEC";
  //     break;
  //   case "delete":
  //     className = "inactiveDEL";
  //     break;
  //   case "save":
  //     className = "inactiveSAVE";
  // }

  return (
    <button
      className={
        loading && class_name === "primary"
          ? "inactivePRI"
          : loading && class_name === "secondary"
          ? "inactiveSEC"
          : loading && class_name === "delete"
          ? "inactiveDEL"
          : loading && class_name === "save"
          ? "inactiveSAVE"
          : class_name
      }
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
