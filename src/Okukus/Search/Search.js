import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import View from "../Body/View";
import { searchBook } from "../apis";
import "./search.css";

const Search = (props) => {
  let id = props.match.params.id;

  const [results, setResults] = useState([]);
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  var formData = new FormData();

  formData.set("search_phrase", id);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "post",
        url: searchBook,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (result.data.error === true) {
        setError(result.data.error);
        setMessage(result.data.message);
        setResults([]);
      } else if (result.data.error === false) {
        setMessage();
        setError();
        setResults(result.data.results);
      }
    };

    fetchData();
  }, [id]);

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
  let view;

  if (!content) {
    view = <div>Loading.....</div>;
  } else {
    view = <> {content}</>;
  }

  return (
    <div className="p-1 body-background">
      <div className="order  ">
        <div className="order-container shadow">
          <div>{id}</div>
          {message ? <div>{message}</div> : null}

          {error === "true" ? null : <div className="wrapper">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default Search;
