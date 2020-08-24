import React from "react";
import useAsync from "../useAync";
import View from "./View";
import Spinner from "../Spinner/Spinner";
import { getbooks } from "../api";

const All = () => {
  const resource = useAsync(getbooks);

  let content = resource.map(
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

  if (resource.error)
    return <span className="text-danger">{resource.error}</span>;

  return (
    <div className="p-1 body-background">
      <div className="wrapper">
        {resource.loading ? <Spinner /> : <>{content}</>}
      </div>
    </div>
  );
};

export default All;
