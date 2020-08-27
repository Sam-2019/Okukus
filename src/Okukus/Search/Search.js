import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import View from "../Body/View";
import { auth } from "../User/authContext";
import { orderbook } from "../apis";
import "./search.css";

const Search = (props) => {
  let id = props.match.params.id;

  const [results, setResults] = useState([]);

  var formData = new FormData();

  formData.set("search_phrase", id);

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: "post",
        url: "https://okukus.com/api_call/search.php",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log(response);
          setResults(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  });

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

  console.log(content);

  let view;

  if (content.length === 0) {
    view = <div>Loading.....</div>;
  } else {
    view = <> {content}</>;
  }

  return (
    <div className="p-1 body-background">
      <div className="order  ">
        <div className="order-container shadow">
          <div>{id}</div>
          <div className="wrapper">{view}</div>
        </div>
      </div>


    </div>
  );
};

export default Search;
