import React, { useState, useEffect } from "react";
import axios from "axios";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import { useAsyncc } from "../helpers";
import { useAuthentication } from "../Auth/Context";
import useInfiniteScroll from "./useInfinite";
import { itemsGet } from "../apis";

const Products = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [page, setPage] = useState(5);
  const [isFetching, setIsFetching] = useInfiniteScroll(moreData);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://okukus.com/api_call_dev/get_books.php"
      );
      console.log(result);
      setData2(result.data);
    };

    fetchData();
  }, []);

  function moreData(start, end) {
    setData([...data, ...data2]);
    setPage(page + 1);
    setIsFetching(false);
    console.log(data)
  }





  // let content = data.map(
  //   ({ unique_id, unit_price, product_name, cover_photo_url }) => (
  //     <View
  //       key={unique_id}
  //       id={unique_id}
  //       unit_price={unit_price}
  //       cover_photo_url={cover_photo_url}
  //       product_name={product_name}
  //     />
  //   )
  // );

  return (
    <div>
      {/* {resource.loading ? (
        <div className="spinner_wrapper">
          <Spinner />
        </div>
      ) : (
        <div className="wrapper">{content}</div>
      )} */}

 

      {/* {message ? <div className="message_wrapper ">{message} </div> : null} */}
    </div>
  );
};

export default Products;
