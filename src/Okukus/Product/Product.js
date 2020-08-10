import React, { useState } from "react";
import "./product.css";
import book1 from "./book1.png";
import products from "../files/products";
import axios from "axios";

class Product extends React.Component {
  state = {
    product: products,
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get("" + id).then((res) => {
      this.setState({
        product: res.data,
      });
      console.log(res);
    });
  }

  render() {
    let id = this.props.match.params.id;
    const item = products.find(({ unique_id }) => unique_id === id);

    let view;

    if (id === item.unique_id) {
      view = (
        <div className="product_page product_bg ">
          <div className="row py-5 ">
            <div className="col-5 col-md-5  ">
              <div className="text-center ">
                <img src={book1} className=" product_image" alt=" slide" />
              </div>
            </div>

            <div className="col-7 col-md ">
              <div className="product_detail ">
                <div className="product_name ">{item.product_name}</div>
                <span className="d-block product_price">
                  ₵{item.unit_price}
                </span>

                <div className="product_review">
                  <span className="">
                    0 Review(s) /{" "}
                    <a href="#" className="">
                      Add Review
                    </a>
                  </span>

                  <span className="d-block  mt-1">
                    Availability : {item.stock} left
                  </span>
                  <span className="d-block  mt-1">
                    Author : {item.product_author}
                  </span>

                  <span className="d-block product_description mt-1 ">
                    {item.product_description}
                    <button className="d-block buy_btn m-2">Buy Now</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      view = <div>Item unavailable</div>;
    }

    return <div>{view}</div>;
  }
}

export default Product;
