import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import productItem from "../files/products";
import Spinner from "../Spinner/Spinner";
import { okukus } from "../apis";
import "./product.css";

const Product = (props) => {
  const [product] = useState(productItem);
  const [loading] = useState(false);
  const [message] = useState();

  let id = props.match.params.id;

  var formData = new FormData();
  formData.set("product_unique_id", id);
  let view;

  if (id) {
    view = (
      <div className="row ">
        <div className="col-5 col-md-5  ">
          <div className="text-center ">
            <img
              src={`${okukus}/${product[0].cover_photo_url}`}
              className=" product_image"
              alt=" slide"
            />
          </div>
        </div>

        <div className="col-7 col-md ">
          <div className="product_detail ">
            <div className="product_name ">{product[0].product_name}</div>
            <span className="d-block product_price">
              ₵{product[0].unit_price}
            </span>

            <div className="product_review">
              <span className="">
                0 Review(s) /{" "}
                {/* <a href="#" className="">
                    Add Review
                  </a> */}
              </span>

              <span className="d-block  mt-1">
                Availability : {product[0].stock} left
              </span>
              <span className="d-block  mt-1">
                Author : {product[0].product_author}
              </span>

              <span className="d-block product_description mt-1 ">
                {product[0].product_description}
              </span>

              <NavLink
                to={/order/ + id}
                className="product_link item buy_btn mt-2"
              >
                Buy book
              </NavLink>

              <NavLink to="/login" className="product_link item buy_btn mt-2">
                Buy book
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    view = <div className="text-center">{message}</div>;
  }

  return (
    <div className="text-center bucket">
      {loading ? <Spinner /> : <div> {view} </div>}
    </div>
  );
};

export default Product;
