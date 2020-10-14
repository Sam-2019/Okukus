import React, { useState, useEffect } from "react";
import axios from "axios";
import useInfiniteScroll from "../useInfinite";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";

const Product = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  let url = `https:okukus.com/api_call_dev/get_books.php`;

  const loadData = () => {
    var formData = new FormData();
    formData.set("offset", offset);

    axios({
      method: "post",
      url: url,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setData(response.data);

        response.data.forEach((d) => {
          setOffset(offset + 1);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const moreData = () => {
    var formData = new FormData();
    formData.set("offset", offset);

    axios({
      method: "post",
      url: "https://okukus.com/api_call_dev/get_books.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        setData([...data, ...response.data]);

        response.data.forEach((d) => {
          setOffset(offset + response.data.length);
        });

        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);
  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    moreData();
  }, []);

  if (data.length === 0) {
    return <Spinner />;
  }

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
    <div className="products_wrapper">
      <div className="wrapper">{content}</div>
    </div>
  );
};

export default Product;