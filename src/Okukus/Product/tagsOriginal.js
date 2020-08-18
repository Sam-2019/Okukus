import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./product.css";
import axios from "axios";
import products from "../files/products";

const Tag = (props) => {
  const [product, setProduct] = useState();
  let id = props.match.params.id;
  console.log(id);

  return (
    <div className=" text-center  ">
      <div className="  cart   ">
        <div className="cart-container shadow ">
          <h2 className=""> {id}</h2>
          <All2 tagname={id} />
        </div>
      </div>
    </div>
  );
};

export default Tag;




const All2 = ({ tagname }) => {
  const [product, setProduct] = useState(products || []);
  console.log(products.product_tag);

  if (tagname === products.product_tag) {
    console.log("All correct");
  } else console.log("not-correct");

  useEffect(() => {
    axios.get(`https://okukus.com/api_call/get_books.php`).then((res) => {
      const products = res.data;
      setProduct(product);
    });
    console.log(product);
  });

  let content = products.map(
    ({ unique_id, unit_price, product_name, cover_photo_url }) => (
      <View
        key={unique_id}
        id={unique_id}
        unit_price={unit_price}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
      />
    )
  );

  return (
    <div className="p-1 body-background">
      <div className="wrapper">{content}</div>
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