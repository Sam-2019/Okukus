import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./product.css";
import axios from "axios";

const Tag = (props) => {
  const [tag, setTag] = useState();
  var file;
  let id = props.match.params.id;

  var formData = new FormData();

  formData.set("book_tag", id);

  useEffect(() => {
    const fetchData = async () => {
      const uri = "https://okukus.com/api_call/get_book_tag.php";
      axios({
        method: "post",
        url: uri,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        console.log(response);
        setTag(response.data);
        file = response.request.response;
        console.log(file);
      });
    };
    fetchData();
  }, []);



  return (
    <div className=" text-center  ">
      <div className="  cart   ">
        <div className="cart-container shadow ">
          <h2 className=""> {id}</h2>
          <div className="p-1 body-background">
            <button>Load data</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;

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
