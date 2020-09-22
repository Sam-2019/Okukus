import React, { useState } from "react";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import product from "../files/products";

const Products = () => {
  const [products] = useState(product);
  const [message] = useState("");
  const [loading] = useState(false);

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
    <div>
      {loading ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : (
        <div className="wrapper">{content}</div>
      )}
      
      {message ? <div className="message_wrapper ">{message} </div> : null}
    </div>
  );
};

export default Products;
