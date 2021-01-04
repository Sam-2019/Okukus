import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import { useAsyncc } from "../helpers";
import { useAuthentication } from "../Auth/Context";
import useInfiniteScroll from "../useInfinite";
import { itemsGet } from "../apis";
import jsonplaceholder from "./jsonplaceholder";

let url = "https://okukus.com/api_call_dev/get_books.php";

const Products = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [more, setMore] = useState(true);
  const [after, setAfter] = useState(0);
  const [isFetching, setIsFetching] = useInfiniteScroll(load);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData2(result.data);
    };
    fetchData();
  }, []);

  console.log(data2);
  const perPage = 10;

  const newData = data2.slice(after, after + perPage);

  function load() {
    const timer = setTimeout(() => {
      setData([...data, ...newData]);
      setMore(newData.length === perPage);
      setAfter(after + newData.length);
      setIsFetching(false);
    }, 500);

    if (newData.length === 0) {
      setIsFetching(false);
      clearTimeout(timer);
    }
  }

  useEffect(() => {
    load();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "https://okukus.com/api_call_dev/get_books.php"
  //     );
  //     console.log(result);
  //     setData2(result.data);
  //   };

  //   fetchData();
  // }, []);

  let content = data.map((product) => (
    <View
      key={product.unique_id}
      id={product.unique_id}
      unit_price={product.unit_price}
      cover_photo_url={product.cover_photo_url}
      product_name={product.product_name}
    />
  ));

  return (
    <div>
      {/* {resource.loading ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : (
        <div className="wrapper">{content}</div>
      )} */}

      <p>Scroll down to load more!!</p>
      <div className="wrapper">{content}</div>

      {isFetching ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : null}

      {/* {message ? <div className="message_wrapper ">{message} </div> : null} */}
    </div>
  );
};

export default Products;
