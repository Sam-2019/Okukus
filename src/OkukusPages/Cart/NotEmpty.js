import React from "react";
import Item from "../Container/View/CartItems";
import Summary from "../Checkout/Summary";
import "./cart.css";

const NotEmpty = ({ cart }) => {
  let content;

  content = cart.map((items, i) => <Item key={i} {...items} />);

  return (
    <div className=" cart_wrapper ">
      <div className="content ">
        <div className="page_title"> Cart</div>

        <div>{content}</div>
      </div>

      <div className="summary_wrapper  ">
        <Summary />
      </div>
    </div>
  );
};

export default NotEmpty;
