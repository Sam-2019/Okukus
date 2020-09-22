import React, { useState } from "react";
import { useAuthentication } from "../../Auth/Context";
import { useAsync } from "../../helpers";
import Vhistory from "../../Container/View/V-history";
import product from "../../files/products";
import Spinner from "../../Spinner/Spinner";
import "./history.css";

const OrderHistory = () => {
  const { historyOrder, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(historyOrder, formData);
  console.log(resource);

  const [order] = useState(product);
  const [message] = useState("");
  const [loading] = useState(false);

  let data = resource.value;
  console.log(data);

  let content = order.map(
    ({
      id,
      unique_id,
      product_name,
      cover_photo_url,
      unit_price,
      datetime_created,
    }) => (
      <Vhistory
        key={id}
        id={unique_id}
        unit_price={unit_price}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
        datetime_created={datetime_created}
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
        <div>{content}</div>
      )}

      {message ? <div className="message_wrapper ">{message} </div> : null}
    </div>
  );
};

export default OrderHistory;
