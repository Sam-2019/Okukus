import React from "react";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import { useAsyncc } from "../helpers";
import { useAuthentication } from "../Auth/Context";

const Products = () => {
  const { getItems } = useAuthentication();

  const resource = useAsyncc(getItems);

  let content = resource.value.map(
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
      {resource.loading ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : (
        <div className="wrapper">{content}</div>
      )}

      {/* {message ? <div className="message_wrapper ">{message} </div> : null} */}
    </div>
  );
};

export default Products;
