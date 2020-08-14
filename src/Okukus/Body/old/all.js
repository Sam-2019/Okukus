import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "./View";

const All = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("https://okukus.com/api_call/get_books.php");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const result = await axios(url);
      setProducts(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

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

  return (
    <div className="p-1 body-background">
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="wrapper">{content}</div>
      )}
    </div>
  );
};

export default All;
