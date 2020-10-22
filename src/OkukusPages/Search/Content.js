import React from "react";
import { useParams } from "react-router-dom";
import View from "../Container/View/View";
import { useAuthentication } from "../Auth/Context";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./search.css";

const Content = (props) => {
  const { searchItem } = useAuthentication();

  let { id } = useParams();

  var formData = new FormData();
  formData.set("search_phrase", id);
  const resource = useAsync(searchItem, formData);

  let content;
  if (resource.value) {
    content = resource.value.map(
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
  }

  return (
    <div className="search_wrapper   ">
      <div className="page_title">Search Results for "{id}"</div>
      <div>
        {resource.loading ? (
          <Spinner />
        ) : resource.message === "no orders found" ? (
          <div className="">No orders found</div>
        ) : (
          <div className="products_wrapper ">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Content;
