import React, { useState, useEffect, useContext } from "react";
import View from "../Body/View";
import { auth } from "../Context/authContext";
import "./product.css";

const Tag = (props) => {
  const { getTag } = useContext(auth);

  const [product, setProduct] = useState([]);
  let id = props.match.params.id;

  useEffect(() => {
    var formData = new FormData();

    formData.set("book_tag", id);
    const fetchData = async () => {
      const data = await getTag(formData);
      setProduct(data);
    };
    fetchData();
  }, [id, getTag]);

  let content = product.map(
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
    view = <div className="text-center">Loading.....</div>;
  } else {
    view = (
      <div className=" text-center  ">
        <div className="cart-container shadow ">
          <h2> {id}</h2>
          <div className="wrapper">{content}</div>
        </div>
      </div>
    );
  }

  return <div>{view}</div>;
};

export default Tag;
