import React, { useState } from "react";
import View from "../Container/View/View";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import product from "../files/products";
import "./search.css";

const Search = (props) => {
  const { searchItem } = useAuthentication();
  let searchphrase = props.match.params.id;

  const [results] = useState(product);
  const [message] = useState("No records found");
  const [error] = useState();

  var formData = new FormData();
  formData.set("search_phrase", searchphrase);
  const resource = useAsync(searchItem, formData);
  console.log(resource);

  let content = results.map(
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
    <>
      <div className="search_wrapper ">
        <h4>Search Results for "{searchphrase}"</h4>

        <div className="message_wrapper ">
          {message ? <div className="search_message "> {message} </div> : null}
        </div>
      </div>
      {error === "true" ? null : <div className="wrapper ">{content}</div>}
    </>
  );
};

export default Search;
