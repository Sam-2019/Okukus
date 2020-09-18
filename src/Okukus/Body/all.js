import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Context/authContext";
import View from "./View";
import Spinner from "../Spinner/Spinner";

const All = () => {
  const { getItems } = useContext(auth);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const data = await getItems();
      if (isMounted) setProducts(data);
    }; fetchData()}, [getItems]);

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
      <div>
        {content.length === 0 ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <div className="wrapper">{content}</div>
        )}
      </div>
    </div>
  );
};

export default All;
