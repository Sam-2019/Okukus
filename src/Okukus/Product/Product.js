import React, { useState, useEffect } from "react";
import "./product.css";
import book1 from "./book1.png";
import axios from "axios";

const Product = (props) => {
  const [product, setProduct] = useState([]);

  let id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://okukus.com/api_call/get_book.php?product_unique_id=${id}`)
      .then((res) => {
        const product = res.data;
        setProduct(product);
      });
    console.log(product);
  });

  let view;

  if (id === product.unique_id) {
    view = (
      <div className="product_page product_bg ">
        <div className="row py-5 ">
          <div className="col-5 col-md-5  ">
            <div className="text-center ">
              <img
                src={`https://okukus.com/${product.cover_photo_url}`}
                className=" product_image"
                alt=" slide"
              />
            </div>
          </div>

          <div className="col-7 col-md ">
            <div className="product_detail ">
              <div className="product_name ">{product.product_name}</div>
              <span className="d-block product_price">
                ₵{product.unit_price}
              </span>

              <div className="product_review">
                <span className="">
                  0 Review(s) /{" "}
                  <a href="#" className="">
                    Add Review
                  </a>
                </span>

                <span className="d-block  mt-1">
                  Availability : {product.stock} left
                </span>
                <span className="d-block  mt-1">
                  Author : {product.product_author}
                </span>

                <span className="d-block product_description mt-1 ">
                  {product.product_description}
                  <button className="d-block buy_btn m-2">Buy Now</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    view = <div>product unavailable</div>;
  }

  return <div>{view}</div>;
};

export default Product;
