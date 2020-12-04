import React from "react";
import Skeleton from "react-loading-skeleton";
import "./view.css";

const View = () => {
  return (
    <>
      <div className="view_wrapper1 " >
        <div className="item_wrapper1 ">
          <div className=" item_image_wrapper ">
            <Skeleton height={230} width={150}  />
          </div>
          <div className="name_price ">
            <div className="item_name_wrapper">
              <span className="item_name">
                <Skeleton width={`70%`} height={16} />
              </span>
            </div>

            <div className=" item_price_wrapper ">
              <span className="item_price2">
                <Skeleton width={`30%`} height={19} />
              </span>

              {/* <span className="discount item">-5%</span> */}
            </div>
          </div>
        </div>
      </div>

      <div className="mobile  ">
        <div className="item_wrapper ">

          <div className=" item_image_wrapper">
            <Skeleton height={200} width={`100%`} />
          </div>

          <div className="name_price">

            <div className="item_name_wrapper">
                <Skeleton width={`100%`} height={15} />
            </div>

            <div className=" item_price_wrapper ">

              <div className=" ">
                  <Skeleton width={`35%`} height={18} />
                {/* <span className="discount item">-5%</span> */}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default View;
