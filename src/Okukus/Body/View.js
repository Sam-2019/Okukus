import React from "react";

const View = (props) => {
  return (
    <div className=" product">
      <div>
        <a
          id="product"
          href="buy_nowd9bb.html?product_unique_id=574ed359ce2e18.82356240"
        >
          <img src="" alt="" className="" />
        </a>
      </div>

      <div className="product-name">{props.product_name}</div>

      <button className="price">₵{props.unit_price}</button>
    </div>
  );
};

export default View;
