import React, { useState, useRef } from "react";
import "./notify.css";

function Notify() {
  const slide = useRef(null);

  const Show = () => {
    const slider = slide.current;
    slider.classList.toggle("is-slideNotify-open");
  };

  return (
    <div>
      <button className="page " onClick={Show}>
        Hello
      </button>

      <div ref={slide} className="slideNotify   ">
        <div className="notify-wrapper">
          <div className="notify">
            <div className="notify-body">This is a notify message.</div>

            <div className="notify-header">
              <button
                type="button"
                className="ml-2 mb-1 close"
                arialabel="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Notify;
