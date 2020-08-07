import React, { useState } from "react";
import products from "../files/products";
import View from "./View";

const Shoes = () => {
  const [items] = useState(products);

  let content = items.map(
    ({ unique_id, unit_price, product_name, cover_photo_url }) => (
      <View
        key={unique_id}
        unit_price={unit_price}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
      />
    )
  );

  return (
    <>
      <div className=" text-center p-5">Shoes</div>
    </>
  );
};

export default Shoes;
