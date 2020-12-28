import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import Message from "../Message/Message";
import { okukus } from "../endpoints";
import { useAsync } from "../helpers";
import { useAuthentication } from "../Auth/Context";
import "./product.css";

const Product = () => {
  const { Auth2, getItem, addCart, uniqueID } = useAuthentication();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  let history = useHistory();

  var formData = new FormData();
  formData.set("product_unique_id", id);

  const resource = useAsync(getItem, formData);

  let data = resource.value;

  const add2cart = async (event) => {
    setLoading(true);
    setMessage();
    event.preventDefault();
    var formData = new FormData();

    formData.set(" buyer_unique_id", uniqueID);
    formData.set("product_unique_id", id);

    const data = await addCart(formData);

    setMessage(data.message);
    setLoading(false);
  };

  // let content;
  // content = (
  //   <div className="product_wrapper ">
  //     <div className=" product_img_wrapper  ">
  //       <img
  //         src={`${okukus}/${data.cover_photo_url}`}
  //         className="product_image"
  //         alt=" slide"
  //       />
  //     </div>

  //     <div className="product_detail_wrapper   ">
  //       <div className="name_author_wrapper ">
  //         <div className="_name ">{data.product_name}</div>

  //         <div className="_author">
  //           <small>by</small> {data.product_author}
  //         </div>
  //       </div>

  //       <div className="three_content_wrapper ">
  //         <div className=" _review ">
  //           0 <small>Review(s)</small>
  //         </div>

  //         <div className=" _price  ">₵{data.unit_price}</div>

  //         <div className="_stock  ">
  //           {data.stock} <small>copies</small>
  //         </div>
  //       </div>

  //       {/* <a href="#" className="" hidden>
  //         Add Review
  //       </a> */}

  //       <div className=" _description">{data.product_description}</div>

  //       {message ? <Message class_name="message" message={message} /> : null}

  //       <div className="button_wrapper ">
  //         <Button
  //           class_name="primary"
  //           name="Buy book"
  //           action={() => {
  //             history.push(`/order/${id}`);
  //           }}
  //         />

  //         <Button
  //           name="Add to cart"
  //           action={add2cart}
  //           class_name="secondary"
  //           loading={loading}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="product_page">
      {resource.loading ? (
        <Spinner size="big" />
      ) : resource.error ? (
        <span className="text-danger">{resource.error}</span>
      ) : (
        <>
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

              {message ? (
                <Message class_name="message" message={message} />
              ) : null}

              <div className="button_wrapper ">
                {Auth2 ? (
                  <Button
                    class_name="primary"
                    name="Buy book"
                    action={() => {
                      history.push(`/order/${id}`);
                    }}
                  />
                ) : (
                  <Button
                    class_name="primary"
                    name="Login"
                    action={() => {
                      history.push("/login");
                    }}
                  />
                )}

                <Button
                  name="Add to cart"
                  action={add2cart}
                  class_name="secondary"
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
