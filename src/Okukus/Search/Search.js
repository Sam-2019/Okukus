import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { auth } from "../User/authContext";
import { orderbook } from "../apis";
import "./search.css";

const Search = (props) => {
  let id = props.match.params.id;

  const [results, setResults] = useState();

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
          setResults(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  });

  return (
    <div className="order  ">
      <div className="order-container shadow">
        <div>{id}</div>
        <div className="">{results}</div>
      </div>
    </div>
  );
};

export default Search;
