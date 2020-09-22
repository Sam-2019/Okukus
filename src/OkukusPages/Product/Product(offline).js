import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import productItem from "../files/products";
import Spinner from "../Spinner/Spinner";
import Primary from "../Button/Primary";
import Secondary from "../Button/Secondary";
import { okukus } from "../apis";
import "./product.css";

const Product = (props) => {
  const [product] = useState(productItem);
  const [loading] = useState(false);
  const [message] = useState();

  let id = props.match.params.id;

  let history = useHistory();

  var formData = new FormData();
  formData.set("product_unique_id", id);
  let view;

  return (
    <div className="product_wrapper ">
      <div className=" product_img_wrapper  ">
        <img
          src={`${okukus}/${product[0].cover_photo_url}`}
          className="product_image"
          alt=" slide"
        />
      </div>

      <div className="product_detail_wrapper   ">
        <div className="name_author_wrapper ">
          <div className="_name ">{product[0].product_name}</div>

          <div className="_author">
            <small>by</small> {product[0].product_author}
          </div>
        </div>

        <div className="three_content_wrapper ">
          <div className=" _review ">
            0 <small>Review(s)</small>
          </div>

          <div className=" _price  ">₵{product[0].unit_price}</div>

          <div className="_stock  ">
            {product[0].stock} <small>copies</small>
          </div>
        </div>

        <a href="#" className="" hidden>
          Add Review
        </a>

        <div className=" _description">{product[0].product_description}</div>

        <div className="button_wrapper ">
          <Secondary name="Add to cart" />

          <Primary
            name="Buy book"
            action={() => {
              history.push(`/order/${id}`);
            }}
          />

          {/* <button className="add_to_cart">Add to cart</button>
          <button className="buy_product" onClick={order}>
            Buy book
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
