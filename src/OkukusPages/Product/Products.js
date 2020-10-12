import React, { useState, useEffect } from "react";
import axios from "axios";
import useInfiniteScroll from "../useInfinite";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import { useAsyncc } from "../helpers";
import { useAuthentication } from "../Auth/Context";

const Products = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);



  let url = `https:okukus.com/api_call_dev/get_books.php`;

  const loadData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  function moreData() {
    var formData = new FormData();
    formData.set("offset", offset);
    axios({
      method: "post",
      url: "https://okukus.com/api_call_dev/get_books.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      setData([...data, ...response.data]);
      response.data.forEach((d) => {
        setOffset(offset + response.data.length);
      });

      setIsFetching(false);
    });
  }

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    moreData();
  }, []);


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
  return (
    <>
      {data.length === 0 ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : (
        <div className="wrapper">{content}</div>
      )}

      {isFetching ? (
        <div className="">
          <Spinner />
        </div>
      ) : null}
    </>
  );
};

export default Products;