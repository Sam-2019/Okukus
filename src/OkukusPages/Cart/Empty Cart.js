import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Button from "../Button/Button";

const EmptyCart = () => {
  const { Auth } = useAuthentication();
  let history = useHistory();
  return (
    <div className="empty_cart">
      <div className="page_title"> Cart</div>
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
        <div>Your cart is empty!.</div>

        {Auth ? null : (
          <>
            <div>Already have an account?</div>

            <div>Login to see items in your cart.</div>
          </>
        )}
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

export default EmptyCart;
