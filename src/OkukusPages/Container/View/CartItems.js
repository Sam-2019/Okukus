import React, { useState, useEffect, useCallback } from "react";
import Button from "../../Button/Button";
import PropTypes from "prop-types";
import Message from "../../Message/Message";
import { useAuthentication } from "../../Auth/Context";
import "./cart-items.css";

const Item = ({
  unit_price,
  product_name,
  cover_photo_url,
  quantity,
  id,
  product_unique_id,
  handleToggle,
  unique_id,
  onFormSubmit,
}) => {
  const { deleteCart, updateCart, createWish, uniqueID } = useAuthentication();

  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const [message, setMessage] = useState("");

  const [qty, setQty] = useState(Number(quantity));

  const deleteItem = async (event) => {
    event.preventDefault();
    var formData = new FormData();

    let empty = id;
    if (empty !== "") {
      setLoading1(true);
      formData.set("buyer_unique_id", uniqueID);
      formData.set("item_unique_id", unique_id);

      const data = await deleteCart(formData);

      if (data.error === true) {
        setLoading1(false);
        // setMessage(data.message);
      } else if (data.error === false) {
        // setMessage(data.message);
      } else return;
    } else return;
  };

  const saveItem = async (event) => {
    setMessage("");
    event.preventDefault();
    var formData = new FormData();

    let empty = product_unique_id;

    if (empty !== "") {
      setLoading2(true);
      formData.set("buyer_unique_id", uniqueID);
      formData.set("product_unique_id", product_unique_id);

      const data = await createWish(formData);
      console.log(data);

      if (data.error === true) {
        setLoading2(false);
        setMessage(data.message);
        // onFormSubmit(data.message);
      } else if (data.error === false) {
        setLoading2(false);
        setMessage(data.message);
        // onFormSubmit(data.message);
      } else return;
    } else return;
  };

  // if (unit_price) {
  //   setMessage("No Davey");
  //   await onFormSubmit(message);
  // }

  const updateItem = useCallback(async () => {
    var formData = new FormData();

    let empty = id && qty;
    if (empty !== "") {
      setLoading3(true);
      formData.set("buyer_unique_id", uniqueID);
      formData.set("item_unique_id", id);
      formData.set("item_quantity", qty);

      const data = await updateCart(formData);
 

      if (data.error === true) {
        setLoading3(false);
      } else if (data.error === false) {
        setLoading3(false);
      } else return;
    } else return;
  }, [uniqueID, id, qty, updateCart]);

  useEffect(() => {
    updateItem();
  }, [updateItem]);

  // const Add = () => {
  //   updateItem();
  //   setQty(qty + 1);
  // };

  // const Subtract = () => {
  //   updateItem();
  //   setQty(qty - 1);
  // };

  const rawsubtotal = qty * unit_price;
  const subtotal = Intl.NumberFormat().format(rawsubtotal);

  return (
    <>
      <div className="cart_item_wrapper">
        <div className="checkBox ">
          <input
            onChange={handleToggle(product_unique_id)}
            type="checkbox"
            className
            value="0"
          />
        </div>

        <div className="cart_image_wrapper  ">
          <img
            src={`https://okukus.com/${cover_photo_url}`}
            className=" cart_image "
            alt=" slide"
          />
        </div>

        <div className="notice  ">
          <div className="secondhalf   ">
            <div className="cart_item_detail  ">
              <div className=" cart_item_name ">{product_name}</div>
            </div>

            {/* <div className="adjust_qty1">
              <button className="cart_button subtract  " onClick={Subtract}>
                -
              </button>

              <input
                className="cart_item_qty  "
                type="number"
                onChange={(e) => setQty(e.target.value)}
                placeholder="0"
                content={qty}
              />

              <button className="cart_button add " onClick={Add}>
                +
              </button>
            </div> */}

            <div className="cart_item_detail  ">
              <div className="cart_item_subtotal">
                <input
                  className="cart_item_qty  "
                  type="number"
                  onChange={(e) => setQty(e.target.value)}
                  placeholder="0"
                  value={qty}
                  min="1"
                />
              </div>

              <div className="cart_item_price ">
                <small>GHc</small>
                <span>{unit_price}</span>
              </div>

              <div className="cart_item_subtotal">{subtotal}</div>
            </div>

            {/* 
        <div className="cart_actions item ">
            <Button name="S" action={updateItem} class_name='save' />
        <Button name="D " action={deleteItem } class_name='delete' />
        </div> */}
          </div>

          <div className="left_button_wrapper  ">
            <Button
              name="Delete"
              class_name="delete"
              action={deleteItem}
              loading={loading1}
            />

            <Button
              name="Save"
              class_name="save"
              action={saveItem}
              loading={loading2}
            />

            <span>
              {message ? <span className="notify">{message}</span> : null}
            </span>
          </div>
        </div>

        <div className="new_button_wrapper2 item">
          <Button
            name="Delete"
            class_name="delete"
            action={deleteItem}
            loading={loading1}
          />

          <Button
            name="Save"
            class_name="save"
            action={saveItem}
            loading={loading2}
          />

          <span>
            {message ? <span className="notify item">{message}</span> : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default Item;

Item.propTypes = {
  unit_price: PropTypes.number,
  product_name: PropTypes.string,
  cover_photo_url: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.number,
  product_unique_id: PropTypes.number,
  handleToggle: PropTypes.func,
  unique_id: PropTypes.number,
  onFormSubmit: PropTypes.func,
};
