import React, { useState, useEffect, useCallback } from "react";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  let url = `https://okukus.com/api_call_dev/get_books.php`;

  const loadData = useCallback(() => {
    axios.get(url).then((res) => {
      setData(res.data);
      setOffset(offset + res.data.length);
    });
  }, [offset, url]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }, [setIsFetching, isFetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const fetchMoreListItems = useCallback(() => {
    var formData = new FormData();
    formData.set("offset", offset);

    axios({
      method: "post",
      url: "https://okukus.com/api_call_dev/get_books.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      setTimeout(() => {
        setData((prevState) => [...prevState, ...response.data]);
        setIsFetching(false);
        setOffset(offset + response.data.length);
        console.log(data.length);
      }, 2000);
    });
  }, [offset, data.length]);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching, fetchMoreListItems]);

  let view;

  let content = data.map(
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

  if (data.length === 0) {
    view = (
      <>
        <Spinner />
      </>
    );
  } else {
    view = <>{content} </>;
  }

  return (
    <>
      <div className="products_wrapper">{view}</div>

      {/* {data.map((item) => (
        <div key={item.id}>
          <p>
            ID: {item.id} Title: {item.product_name}
          </p>
        </div>
      ))} */}
      {isFetching ? <Spinner /> : null}
      <div>{!isFetching ? <>End </> : null}</div>
    </>
  );
};

export default App;
