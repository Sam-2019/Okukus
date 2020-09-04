import React, { useState, useEffect, useContext } from "react";
import View from "../Body/View";
import { auth } from "../Context/authContext";
import Spinner from "../Spinner/Spinner";
import "./product.css";

const Tag = (props) => {
  const { getTag } = useContext(auth);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  let id = props.match.params.id;

  useEffect(() => {
    var formData = new FormData();

    formData.set("tag_title", id);
    const fetchData = async () => {
      const data = await getTag(formData);

      if (data.error === true) {
        setLoading(false);
      } else {
        setLoading(false);
        setProduct(data);
      }
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

  return (
    <div className=" text-center  ">
      <div className="tags-container shadow ">
        <h2> {id}</h2>

        <div >
          {loading ? <Spinner /> : <div className="wrapper">{content}</div>}
        </div>
      </div>
    </div>
  );
};

export default Tag;
