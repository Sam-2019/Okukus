import React, { useState } from "react";
import Delete from "../Button/Delete";
import Save from "../Button/Save";
import { useAuthentication } from "../Auth/Context";

const Item = ({
  unit_price,
  product_name,
  cover_photo_url,
  quantity,
  unique_id,
}) => {
  const { deleteCart, updateCart } = useAuthentication();

  const deleteItem = async (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.set("buyer_unique_id", unique_id);
    formData.set("cart_item_unique_id", unique_id);

    const data = await deleteCart(formData);
    console.log(data);
  };

  const updateItem = async (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.set("buyer_unique_id", unique_id);
    formData.set("item_unique_id", unique_id);
    formData.set("item_quantity", unique_id);

    const data = await updateCart(formData);
    console.log(data);
  };

  const [qty, setQty] = useState(Number(quantity));

  const Add = () => {
    setQty(qty + 1);
  };

  const Subtract = () => {
    setQty(qty - 1);
  };

  const rawsubtotal = qty * unit_price;
  const subtotal = Intl.NumberFormat().format(rawsubtotal);

  return (
    <div className="cart_item_wrapper ">
      <div className="cart_image_wrapper ">
        <img
          src={`https://okukus.com/${cover_photo_url}`}
          className=" cart_image "
          alt=" slide"
        />
      </div>

      <div className=" cart_item_name">{product_name}</div>

      <div className="cart_item_detail ">
        <div className="adjust_qty">
          <button className="cart_button subtract item " onClick={Subtract}>
            -
          </button>

          <input
            className="cart_item_qty item "
            type="number"
            onChange={(e) => setQty(e.target.value)}
            placeholder="0"
            value={qty}
          />

          <button className="cart_button add item" onClick={Add}>
            +
          </button>
        </div>

        <div className="cart_item_price ">
          <small>GHc</small>
          <small>{unit_price}</small>
    
        </div>

        <div className="cart_item_subtotal">{subtotal}</div>
      </div>

      <div className="cart_actions ">
        <Save name="Save" action={updateItem} />
        <Delete name="Delete " action={deleteItem} />
      </div>
    </div>
  );
};

export default Item;
