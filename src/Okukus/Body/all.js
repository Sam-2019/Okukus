import React, { useState } from "react";
import products from "../files/products";
import View from "./View";

const All = () => {
  const [items] = useState(products);

  let content = items.map(
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
