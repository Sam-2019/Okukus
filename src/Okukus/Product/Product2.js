import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { input, getbook } from "../api";
import useAsync from "../useAync2";
import Spinner from "../Spinner/Spinner";
import "./product.css";

const Product = (props) => {
  let id = props.match.params.id;

  var formData = new FormData();
  formData.set("product_unique_id", id);

  const resource = useAsync(input, getbook, formData);

  let content = <>
     <div className="product_page product_bg ">
        <div className="row py-5 ">
          <div className="col-5 col-md-5  ">
            <div className="text-center ">
              <img
                src={`https://okukus.com/${resource.cover_photo_url}`}
                className=" product_image"
                alt=" slide"
              />
            </div>
          </div>

          <div className="col-7 col-md ">
            <div className="product_detail ">
              <div className="product_name ">{resource.product_name}</div>
              <span className="d-block product_price">
                ₵{resource.unit_price}
              </span>

              <div className="product_review">
                <span className="">
                  0 Review(s) /{" "}
                  <a href="#" className="">
                    Add Review
                  </a>
                </span>

                <span className="d-block  mt-1">
                  Availability : {resource.stock} left
                </span>
                <span className="d-block  mt-1">
                  Author : {resource.product_author}
                </span>

                <span className="d-block product_description mt-1 ">
                  {resource.product_description}
                </span>
                <NavLink to={/order/ + id} className="product_link">
                  <button className="d-block buy_btn m-2">Buy Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>

  if (resource.error)
  return <span className="text-danger">{resource.error}</span>;

  if (id != resource.unique_id)
  return <span className="text-danger">{resource.error}</span>;


  return (
    <div className="p-1 body-background">
      <div className="wrapper">
        {resource.loading ? <Spinner /> : <>{content}</>}
      </div>
    </div>
  );

  
};

export default Product;
