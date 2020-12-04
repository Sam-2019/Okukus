import React from "react";
import "./spinner.css";

const Spinner = ({ size, small, color}) => {
  return (
    <>
      {/* <div className=" spinner_wrapper item">
        <div className="spinner-border spinner" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      <div className={size}>
        <div className={`spinner-border ${small} ${color}`} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
