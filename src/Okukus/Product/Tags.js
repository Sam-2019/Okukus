import React, { useState, useEffect } from "react";
import View from "../Body/View";
import { getbooktag } from "../apis";
import "./product.css";
import axios from "axios";

const Tag = (props) => {
  const [product, setProduct] = useState([]);
  let id = props.match.params.id;
  console.log(id);

  var formData = new FormData();

  formData.set("book_tag", id);

  useEffect(() => {
    const fetchData = async () => {
      const uri = getbooktag;
      axios({
        method: "post",
        url: uri,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((res) => {
        setProduct(res.data);
      });
    };
    fetchData();
  }, []);

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

  return (
    <div className=" text-center  ">
      <div className="  cart   ">
        <div className="cart-container shadow ">
          <h2 className=""> {id}</h2>
          <div className="p-1">
            <div className="wrapper">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
