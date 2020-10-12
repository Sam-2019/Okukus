import React from "react";
import View from "../Container/View/View";
import { useAuthentication } from "../Auth/Context";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./search.css";

const Content = (props) => {
  const { searchItem } = useAuthentication();
  let searchphrase = props.match.params.id;

  var formData = new FormData();
  formData.set("search_phrase", searchphrase);
  const resource = useAsync(searchItem, formData);
  console.log(resource.message);

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
    <div className="search_wrapper  ">
      <h4 className="title_item">Search Results for "{searchphrase}"</h4>
      <div>
        {resource.loading ? (
          <div className="spinner_wrapper">
            <Spinner />
          </div>
        ) : resource.message === "no orders found" ? (
          <div className=''>No orders found</div>
        ) : (
          <div className="wrapper ">{content}</div>
        )}
      </div>
    </div>
  );
};

export default Content;
