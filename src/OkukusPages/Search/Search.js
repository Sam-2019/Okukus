import React, { useState } from "react";
import View from "../Container/View/View";
import { useAuthentication } from "../Auth/Context";
import Spinner from "../Spinner/Spinner";
import { useAsync } from "../helpers";
import "./search.css";

const Search = (props) => {
  const { searchItem } = useAuthentication();
  let searchphrase = props.match.params.id;

  var formData = new FormData();
  formData.set("search_phrase", searchphrase);
  const resource = useAsync(searchItem, formData);


  let content = resource.value.map(
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

  return (
    <div className="search_wrapper  ">
      <h4 className='title_item'>Search Results for "{searchphrase}"</h4>
      <div>

      {resource.loading ? (
        <Spinner />
      ) : resource.error ? (
        <div className="search_message">{resource.message}</div>
      ) : (
        <div className="wrapper ">{content}</div>
      )}
    </div>
    </div>
  );
};

export default Search;
