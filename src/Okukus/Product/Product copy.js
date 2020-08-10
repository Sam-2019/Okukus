import React, { useState } from "react";
import "./product.css";
import book1 from "./book1.png";

const Product = () => {
  return (
    <div className="product_page product_bg ">
      <div className="row py-5">
        <div className="col-5 col-md-5 item ">
          <div className="text-center ">
            <img src={book1} className=" product_image" alt=" slide" />
          </div>
        </div>

        <div className="col-7 col-md ">
          <div className="product_detail ">
            <div className="product_name ">The Man Who Was Thursday</div>
            <span className="d-block product_price">₵10.00</span>
            <div className="product_review">
              <span className="">
                0 Review(s) /{" "}
                <a href="#" className="">
                  Add Review
                </a>
              </span>

              <span className="d-block  mt-1">Availability : 8 left</span>
              <span className="d-block  mt-1">Author : G. K. CHESTERTON</span>

              <span className="d-block product_description mt-1 ">
                In Edwardian era London, Gabriel Syme is recruited at Scotland
                Yard to a secret anti-anarchist police corps. Lucian Gregory, an
                anarchistic poet, lives in the suburb of Saffron Park. Syme
                meets him at a party and they debate the meaning of poetry.
                Gregory argues that revolt is the basis of poetry. Syme demurs,
                insisting the essence of poetry is not revolution but law. He
                antagonises Gregory by asserting that the most poetical of human
                creations is the timetable for the London Underground.
                <button className="d-block buy_btn m-2">Buy Now</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
