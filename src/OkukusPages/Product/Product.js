import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Primary from "../Button/Primary";
import Secondary from "../Button/Secondary";
import { okukus } from "../apis";
import { useAsync } from "../helpers";
import { useAuthentication } from "../Auth/Context";
import Alertbox from "../DialogBox/AlertBox";
import "./product.css";

const Product = (props) => {
  const { getItem, addCart, uniqueID } = useAuthentication();
  const [message, setMessage] = useState();

  let id = props.match.params.id;
  let history = useHistory();

  var formData = new FormData();
  formData.set("product_unique_id", id);

  const resource = useAsync(getItem, formData);
  console.log(resource)

  const add2cart = async (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set(" buyer_unique_id", uniqueID);
    formData.set("product_unique_id", id);

    const data = await addCart(formData);
    setMessage(data.data.message);
  };

  let data = resource.value;

  let content;
  content = (
    <div className="product_wrapper ">
      <div className=" product_img_wrapper  ">
        <img
          src={`${okukus}/${data.cover_photo_url}`}
          className="product_image"
          alt=" slide"
        />
      </div>

      <div className="product_detail_wrapper   ">
        <div className="name_author_wrapper ">
          <div className="_name ">{data.product_name}</div>

          <div className="_author">
            <small>by</small> {data.product_author}
          </div>
        </div>

        <div className="three_content_wrapper ">
          <div className=" _review ">
            0 <small>Review(s)</small>
          </div>

          <div className=" _price  ">₵{data.unit_price}</div>

          <div className="_stock  ">
            {data.stock} <small>copies</small>
          </div>
        </div>

        {/* <a href="#" className="" hidden>
          Add Review
        </a> */}

        <div className=" _description">{data.product_description}</div>

        <div className="message_wrapper ">
          {message ? <div className="user_message "> {message}</div> : null}
        </div>

        <div className="button_wrapper ">
          <Secondary name="Add to cart" action={add2cart} />

          <Primary
            name="Buy book"
            action={() => {
              history.push(`/order/${id}`);
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {resource.loading ? (
        <Spinner />
      ) : resource.error ? (
        <span className="text-danger">{resource.error}</span>
      ) : (
        <>{content}</>
      )}
    </div>
  );
};

export default Product;