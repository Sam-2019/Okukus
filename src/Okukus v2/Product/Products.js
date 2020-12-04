import React, { useState, useEffect } from "react";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import axios from "axios";
import { itemsGet } from "../apis";

const App = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(itemsGet);
      setLoading(false);
      setData(result.data);
      setOffset(offset + result.data.length);
    };
    fetchData();
  }, []);

  function load() {
    setLoading(true);
    var formData = new FormData();
    formData.set("offset", offset);

    axios({
      method: "post",
      url: itemsGet,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      setTimeout(() => {
        setData((prevState) => [...prevState, ...response.data]);
        setOffset(offset + response.data.length);
        setLoading(false);
      }, 100);


    });
  }

  let content = data.map(
    ({ unique_id, unit_price, product_name, cover_photo_url }) => (
      <View
        key={unique_id}
        id={unique_id}
        unit_price={unit_price}
        cover_photo_url={cover_photo_url}
        product_name={product_name}
      />
    )
  );

  return (
    <>
      <div className="products_wrapper">{content}</div>

      {/* {data.map((item) => (
        <div key={item.id}>
          <p>
            ID: {item.id} Title: {item.product_name}
          </p>
        </div>
      ))} */}

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="button_wrapper margin ">
            <Button class_name="primary" name="Load more" action={load} />
          </div>
        )}
      </div>

      {/* {data.length > offset ? <div> All</div> : null} */}
    </>
  );
};

export default App;
