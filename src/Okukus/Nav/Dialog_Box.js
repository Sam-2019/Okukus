import React, { useState } from "react";
import "./dialog.css";

const DialogBox = () => {
  return (
    <>
      <div className="user_dialogbox">
        <div className=" inline">
  

          <div className="">
            <span className="stack  ">
              <i className="far fa-user-circle stack-1x"></i>
            </span>
          </div>

          <div className="">
            <span className="stack  ">
              <i className="fas fa-shopping-cart stack-1x"></i>
            </span>
          </div>

 
        </div>
      </div>
    </>
  );
};

export default DialogBox;
