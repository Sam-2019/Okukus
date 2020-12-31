import React from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";
import "./button.css";

const Button = ({ class_name, action, name, loading }) => {
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

Button.propTypes = {
  class_name: PropTypes.string,
  action: PropTypes.func,
  name: PropTypes.string,
  loading: PropTypes.bool,
};
