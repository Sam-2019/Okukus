import React from "react";

const Spinner = () => {
  return (
    <>
      <div className=" text-center my-5">
        <div className="spinner-border spinner" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
