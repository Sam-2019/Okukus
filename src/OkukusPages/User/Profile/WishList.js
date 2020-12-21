import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../../Auth/Context";
import { useAsync } from "../../helpers";
import Item from "../../Container/View/WishItems";
import Spinner from "../../Spinner/Spinner";
import Button from "../../Button/Button";
import product from "./products";
import "./history.css";

const WishList = () => {
  const { listWish, uniqueID } = useAuthentication();

  var formData = new FormData();
  formData.set("buyer_unique_id", uniqueID);

  const resource = useAsync(listWish, formData);

  let content;

  if (resource.value) {
    content = resource.value.map((items, i) => <Item key={i} {...items} />);
  }
  return (
    <div>
      {resource.loading ? (
        <Spinner size="big" />
      ) : resource.message === "wishlist is empty" ? (
        <NoContent />
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
};

export default WishList;

const NoContent = () => {
  let history = useHistory();
  return (
    <div className="empty_cart">
      <div className="cart_stack">
        <svg
          viewBox="0 0 16 16"
          className="bi bi-cart3 "
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          />
        </svg>
      </div>

      <div className=" empty_cart_message">
        <div>You have zero items in your wish list!</div>
      </div>

      <Button
        name="Go Shopping"
        class_name="primary"
        action={() => {
          history.push("/");
        }}
      />
    </div>
  );
};
