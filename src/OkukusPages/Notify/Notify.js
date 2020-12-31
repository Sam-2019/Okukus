import React from "react";
import PropTypes from "prop-types";
import './notify.css'

const Notify = ({ message }) => {
  return (
    <div className="notifier">
      <div>{message}</div>
    </div>
  );
};

export default Notify;

Notify.propTypes ={
  message: PropTypes.string
}
