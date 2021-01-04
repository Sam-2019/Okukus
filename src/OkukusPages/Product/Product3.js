import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Primary from "../Button/Primary";
import Secondary from "../Button/Secondary";
import { okukus } from "../apis";
import { useAsync } from "../helpers";
import { useAuthentication } from "../Auth/AuthContext";
import "./product.css";

// function useAsync(getMethod, data) {
//   const [value, setValue] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function getResource() {
//     try {
//       setLoading(true);
//       const result = await getMethod(data);
//       setValue(result);
//     } catch (e) {
//       setError(e);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getResource();
//   }, data);

//   return { value, error, loading };
// }

const Product = (props) => {
  const { getItem } = useAuthentication();

  let id = props.match.params.id;

  // const resource = useAsync(getItem, formData);
  // console.log(resource);

  var formData = new FormData();
  formData.set("product_unique_id", id);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await getItem(formData);
  //     console.log(data);
  //   };

  //   fetchData();
  // }, [id, getItem]);

  const resource = useAsync(getItem, formData);


  // if (resource.error) {
  //   content = (
  //     <div>
  //       <span className="text-danger">{error}</span>

  //       <div className="button_wrapper ">
  //         <Primary name="go shopping" action={homapage} />
  //       </div>
  //     </div>
  //   );
  // } else {
  //   content = (
  //     <div>
  //       <div className=" product_img_wrapper  ">
  //         <img
  //           src={`${okukus}/${value.cover_photo_url}`}
  //           className="product_image"
  //           alt=" slide"
  //         />
  //       </div>

  //       <div className="product_detail_wrapper   ">
  //         <div className="name_author_wrapper ">
  //           <div className="_name ">{value.product_name}</div>

  //           <div className="_author">
  //             <small>by</small> {value.product_author}
  //           </div>
  //         </div>

  //         <div className="three_content_wrapper ">
  //           <div className=" _review ">
  //             0 <small>Review(s)</small>
  //           </div>

  //           <div className=" _price  ">₵{value.unit_price}</div>

  //           <div className="_stock  ">
  //             {value.stock} <small>copies</small>
  //           </div>
  //         </div>

  //         <a href="#" className="" hidden>
  //           Add Review
  //         </a>

  //         <div className=" _description">{value.product_description}</div>

  //         <div className="button_wrapper ">
  //           <Secondary name="Add to cart" />
  //           <Primary name="buy book" action={order} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="product_wrapper ">
      {/* {loading ? <Spinner /> : <> Hi</>} */}
      Hi
    </div>
  );
};

export default Product;
