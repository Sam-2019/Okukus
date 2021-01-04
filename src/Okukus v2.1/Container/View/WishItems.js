import React from "react";
import Button from "../../Button/Button";
import { useAuthentication } from "../../Auth/Context";
import "./wish-items.css";

const Item = ({
  availablity,
  cover_photo_url,
  existence,
  id,
  product_author,
  product_category,
  product_description,
  product_name,
  product_unique_id,
  stock,
  unique_id,
  unit_price,
}) => {
  const { deleteWish, uniqueID } = useAuthentication();

  const deleteItem = async (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.set("buyer_unique_id", uniqueID);
    formData.set("item_unique_id", unique_id);

    await deleteWish(formData);
  };

  return (
    <>
      <div className="wish_item_wrapper">
        <div className="wish_image_wrapper ">
          <img
            src={`https://okukus.com/${cover_photo_url}`}
            className=" wish_image "
            alt=" slide"
          />
        </div>

        <div className="wish_notice ">
          <div className="wish_secondhalf ">
            <div className="wish_item_detail ">
              <div className=" wish_item_name ">{product_name}</div>
            </div>

            <div className="wish_item_detail ">
              <div className="wish_item_price ">
                <small>GHc</small>
                <span>{unit_price}</span>
              </div>
              <div className="wish_item_price ">
                <span>{stock}</span>
              </div>
            </div>
          </div>

          <div className="wish_secondhalf ">
            <div className="wish_item_detail ">
              <div className="wish_item_price ">
                {availablity === true ? (
                  <span>Available </span>
                ) : (
                  <span>Nope</span>
                )}
              </div>

              <div className="wish_item_price ">
                {existence === true ? <span>Exists </span> : <span>Nope</span>}
              </div>

              <div className="wish_item_price ">
                <Button name="Delete" class_name="delete" action={deleteItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
