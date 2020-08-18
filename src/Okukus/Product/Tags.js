import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./product.css";
import axios from "axios";

const Tag = (props) => {
  let id = props.match.params.id;


  return (
    <div className=" text-center  ">
      <div className="  cart   ">
        <div className="cart-container shadow ">
          <h2 className=""> {id}</h2>
          <All2 book_tag={id} />
        </div>
      </div>
    </div>
  );
};

export default Tag;




const All2 = ({ book_tag }) => {
  const [data, setData] = useState({ hits: [] });

  console.log(book_tag)

  useEffect(() => {
    var formData = new FormData();
    formData.set("book_tag", book_tag);

    const fetchData = async () => {
      const result = await axios({
        method: "post",
        url: "https://okukus.com/api_call/get_book_tag.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setData(result.data);
      console.log(data)
    };
    fetchData();
  }, []);



  return (
    <div className="p-1 body-background">
      <div className="wrapper">hi</div>
    </div>
  );
};

const View = (props) => {
  return (
    <div className=" product">
      <NavLink to={/product/ + props.id} className="product_link">
        <div className=" text-center">
          <img
            src={`https://okukus.com/${props.cover_photo_url}`}
            alt="hi"
            className="product-image"
          />
        </div>

        <div className="product-name">{props.product_name}</div>

        <div className="buy_button">
          <button className="price">₵{props.unit_price}</button>
        </div>
      </NavLink>
    </div>
  );
};
