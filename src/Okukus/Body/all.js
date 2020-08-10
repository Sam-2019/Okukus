import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import View from "./View";

const All = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://okukus.com/api_call/get_books.php`).then((res) => {
      const products = res.data;
      setProducts(products);
    });
    console.log(products);
  });

  let content = products.map(
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

  return <div className="wrapper">{content}</div>;
};

export default All;
