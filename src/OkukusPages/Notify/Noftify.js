import React from "react";
import './notify.css'

const Noftify = ({ message }) => {
  return (
    <div className="notifier">
      <div>{message}</div>
    </div>
  );
};

export default Noftify;
