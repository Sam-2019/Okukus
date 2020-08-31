import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Context/authContext";
import View from "./View";

const All = () => {
  const { getItems } = useContext(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const data = await getItems();
      if (isMounted) setProducts(data);
    };
    fetchData();

  }, []);

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

  let view;

  if (content.length === 0) {
    view = <div>Loading.....</div>;
  } else {
    view = <> {content}</>;
  }

  return (
    <div className="p-1 body-background">
      <div className="wrapper">{view}</div>
    </div>
  );
};

export default All;
