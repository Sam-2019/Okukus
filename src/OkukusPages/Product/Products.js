import React, { useState, useEffect } from "react";
import View from "../Container/View/View";
import ViewLoading from "../Container/View/ViewLoading";
import Button from "../Button/Button";
import axios from "axios";
import { itemsGet } from "../endpoints";
import Products from "../files/products";

const App = () => {
  const [data, setData] = useState(Products);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(itemsGet);
      setLoading(false);
      setData(result.data);
      setOffset(offset + result.data.length);
    };
    fetchData();
  }, []);

  function load() {
    setLoading(true);
    var formData = new FormData();
    formData.set("offset", offset);
    axios({
      method: "post",
      url: itemsGet,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      setTimeout(() => {
        setData((prevState) => [...prevState, ...response.data]);
        setOffset(offset + response.data.length);
        setLoading(false);
      }, 100);
    });
  }

  let content = data.map((products, i) => <View key={i} {...products} />);

  const ViewLoad = () => {
    return (
      <>
        {Array(8)
          .fill()
          .map((item, index) => (
            <ViewLoading key={index} />
          ))}
      </>
    );
  };

  return (
    <>
      <div className="products_wrapper ">{content}</div>

      {/* <div className="products_wrapper">
        {loading ? <> {content} </> : <ViewLoad />}
      </div> */}

      <div>
        {loading ? (
          <div className="products_wrapper">
            <ViewLoad />
          </div>
        ) : (
          <div className="button_wrapper margin ">
            <Button class_name="primary" name="Load more" action={load} />
          </div>
        )}
      </div>

      {/* {data.length > offset ? <div> All</div> : null} */}
    </>
  );
};

export default App;
