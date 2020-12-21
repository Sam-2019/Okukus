import React, { useEffect, useState } from "react";
import Item from "../Container/View/CartItems";
import Summary from "../Checkout/Summary";

import "./cart.css";

const NotEmpty = ({ cart }) => {
  const [formData, setFormData] = useState("");
  const [checked, setChecked] = useState([]); //cart items from DB

  useEffect(() => {
    setFormData(new FormData());
  }, []);

  const handleToggle = (c) => () => {
    // return the first index or -1
    const clickedCategory = checked.indexOf(c);

    const all = [...checked];

    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }

    setChecked(all);
    formData.set("categories", all);

    var data = formData.get("categories");
    console.log(data);
  };

  let showContent = cart.map((items, i) => (
    <Item key={i} {...items} handleToggle={handleToggle} />
  ));

  return (
    <div className=" cart_wrapper ">
      <div className="content ">
        <div className="page_title">
          <div className="title_container">
            <div className="another_container">
              Cart
              <div> (4 Items)</div>
            </div>

            <div>4000</div>
          </div>
        </div>

        <div>{showContent}</div>
      </div>

      <div className="summary_wrapper  ">
        <Summary />
      </div>
    </div>
  );
};

export default NotEmpty;
