import React from "react";
import "./alertbox.css";

const AlertBox = ({ alert }) => {
  return (
    <div className=" alertbox  ">
      <div className=" text-center">Please type in an item</div>

      <div className=" text-right ">
        <button onClick={alert}>Ok</button>
      </div>
    </div>
  );
};

export default AlertBox;
