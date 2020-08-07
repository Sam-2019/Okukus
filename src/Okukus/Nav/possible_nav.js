import React, { useState } from "react";
import "./possible.css";

const Navigation = () => {
  const [menudialog, setMenudialog] = useState(false);
  const [icon, setIcon] = useState(true);

  const menuDialog = () => {
    setMenudialog(true);
    setIcon(false);
  };

  const showIcon = () => {
    setIcon(false);
  };

  return (
    <>
      <div className=" d-flex justify-content-between bg-white p-2 shadow  ">
        <div className="p-2 bd-highlight  ">
          <div className="  " onClick={menuDialog}>
            <i className="fa fa-bars  " />
          </div>
        </div>

        <div className="p-2  col-7 col-md-4 text-center ">
 Okukus
</div>

        <div className="bd-highlight inline in-content">
   
      
     
              <div className="mr-3">
                <span className="stack  ">
                  <i className="far fa-user-circle stack-1x"></i>
                </span>
              </div>

              <div className="mr-3">
                <span className="stack  ">
                  <i className="fas fa-shopping-cart stack-1x fa-flip-horizontal"></i>
                </span>
              </div>
       
        <Search showIcon={showIcon} />

      
        </div>
      </div>
    </>
  );
};

export default Navigation;

const Search = (props) => {
  return (
    <div className=" search_item">
      <input
        className="control"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </div>
  );
};
