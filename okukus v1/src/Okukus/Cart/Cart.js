import React, { useState, useEffect, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import { auth } from "../Context/authContext";
import EmptyCart from "./Empty Cart";
import "./cart.css";

const Cart = () => {
  // const [state, setstate] = useState(true);

  // const handler = () => {
  //setstate(!state);
  // };

  return (
    <div className="cart_wrapper item">
      <h2 className="text-center "> Cart</h2>
      <NotEmpty />
    </div>
  );
};

export default Cart;

const NotEmpty = (props) => {
  return (
    <div className="not_empty">
      <List />
    </div>
  );
};

const List = () => {
  const { getCart } = useContext(auth);
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    var formData = new FormData();

    formData.set("token", loginToken);

    const fetchData = async () => {
      const data = await getCart(formData);
      console.log(data);
      if (data.error === true) {
        setLoading(false);
        setMessage(data.message);
      } else {
        setLoading(false);
        setValue(data);
      }
    };

    fetchData();
  }, [getCart]);

  let content = value.map(
    ({ unique_id, unit_price, product_name, cover_photo_url, stock }) => (
      <Item
        key={unique_id}
        id={unique_id}
        unit_price={unit_price}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
        stock={stock}
      />
    )
  );

  return (
    <div>
      {/* <div className="cart_itemwrapper item ">
        <div className="imagewrapper item ">Item</div>
        <div className="cart_itemdetail item">
     
          <div className="cart_item_qty">Qty</div>

          <div className="cart_item_price item">Unit Price</div>

          <div className="cart_item_subtotal">Subtotal</div>
        </div>

        <div className="cart_actions" >
   
        </div>
      </div> */}

{loading ? <Spinner /> : <> {message} </>}


      <div className="cart_total_wrapper  ">
        <div className="cart_total">Total</div>
        <div className="cart_total_amount  ">Total</div>
      </div>
    </div>
  );
};

const Item = ({ unit_price, product_name, cover_photo_url, stock }) => {
  const [qty, setQty] = useState(Number(stock));

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
      <div className="image_wrapper ">
        <img
          src={`https://okukus.com/${cover_photo_url}`}
          className=" cart_image "
          alt=" slide"
        />
      </div>

      <div className=" cart_item_name">{product_name}</div>

      <div className="cart_item_detail">
        <div className="adjust_qty">
          <button className="cart_button subtract " onClick={Subtract}>
            -
          </button>

          <input
            className="cart_item_qty "
            type="number"
            onChange={(e) => setQty(e.target.value)}
            placeholder="0"
            value={qty}
          />

          <button className="cart_button add" onClick={Add}>
            +
          </button>
        </div>

        <div className="cart_item_price ">GHc{unit_price}</div>

        <div className="cart_item_subtotal">{subtotal}</div>
      </div>

      <div className="cart_actions">
        <button className="cart_save">Save item</button>
        <button className="cart_delete ">Remove</button>
      </div>
    </div>
  );
};
