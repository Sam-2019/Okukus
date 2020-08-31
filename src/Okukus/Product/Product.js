import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../Context/authContext";
import Spinner from "../Spinner/Spinner";
import "./product.css";

const Product = (props) => {
  const { rootState, getItem } = useContext(auth);
  const { isAuth } = rootState;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  let id = props.match.params.id;

  useEffect(() => {
    var formData = new FormData();
    formData.set("product_unique_id", id);

    const fetchData = async () => {
      const data = await getItem(formData);
      if (data) {
        setLoading(false);
        setProduct(data);
      } else {
        setLoading(false);
        setMessage("No data");
      }

      setProduct(data);
    };

    fetchData();
  }, [id, getItem]);

  let view;

  if (id === product.unique_id) {
    view = (
      <div className="row ">
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
            <span className="d-block product_price">₵{product.unit_price}</span>

            <div className="product_review">
              <span className="">
                0 Review(s) /{" "}
                {/* <a href="#" className="">
                    Add Review
                  </a> */}
              </span>

              <span className="d-block  mt-1">
                Availability : {product.stock} left
              </span>
              <span className="d-block  mt-1">
                Author : {product.product_author}
              </span>

              <span className="d-block product_description mt-1 ">
                {product.product_description}
              </span>

              {isAuth ? (
                <NavLink
                  to={/order/ + id}
                  className="product_link item buy_btn mt-2"
                >
                  Buy book
                </NavLink>
              ) : (
                <NavLink to="/login" className="product_link item buy_btn mt-2">
                  Buy book
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    view = <div className="text-center">{message}</div>;
  }

  return (
    <div className="text-center">
      <div className="product_page">
        {loading ? <Spinner /> : <div> {view} </div>}
      </div>
    </div>
  );
};

export default Product;
