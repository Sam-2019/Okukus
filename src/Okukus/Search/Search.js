import React, { useState, useContext, useEffect } from "react";
import { auth } from "../Context/authContext";
import View from "../Body/View";
import "./search.css";

const Search = (props) => {
  const { searchItem } = useContext(auth);
  let id = props.match.params.id;

  const [results, setResults] = useState([]);
  const [message, setMessage] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    var formData = new FormData();
    formData.set("search_phrase", id);

    const fetchData = async () => {
      const data = await searchItem(formData);
      if (data.error === true) {
        setError(data.error);
        setMessage(data.message);
        setResults([]);
      } else if (data.error === false) {
        setMessage();
        setError();
        setResults(data.results);
      }
    };

    fetchData();
  }, [searchItem, id]);

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
    <div className="order-container shadow">
      <div>
        Search Results for <span className=" text-uppercase">"{id}"</span>
      </div>

      {message ? <div>{message}</div> : null}

      {error === "true" ? null : <div className="wrapper">{content}</div>}
    </div>
  );
};

export default Search;
