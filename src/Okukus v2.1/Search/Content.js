import React from "react";
import { useParams, useLocation } from "react-router-dom";
import View from "../Container/View/View";
import { useAuthentication } from "../Auth/Context";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./search.css";

const Content = () => {
  const { searchItem } = useAuthentication();

  let { id } = useParams();
  let query2 = useQuery();

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
      <Child name={query2.get("name")} />
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Child({ name }) {
  return (
    <div>
      {name ? (
        <>
          <div className="page_title">Search Results for "{name}"</div>
          <h3>
            The <code>name</code> in the query string is &quot;{name}
            &quot;
          </h3>
        </>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}
