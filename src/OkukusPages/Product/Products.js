import React, { useState, useEffect, useCallback } from "react";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import Button from "../Button/Button";
import axios from "axios";

const okukus = "https://okukus.com";
const live_site = "api_call";
const dev_site = `${live_site}_dev`;
const itemsGet = `${okukus}/${dev_site}/get_books.php`;

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
      url: "https://okukus.com/api_call_dev/get_books.php",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {
      setTimeout(() => {
        setData((prevState) => [...prevState, ...response.data]);
        setOffset(offset + response.data.length);
        setLoading(false);
        console.log(data.length);
      }, 500);
    });
  }

  let view;

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

  if (data.length === 0) {
    view = (
      <>
        <Spinner />
      </>
    );
  } else {
    view = <>{content} </>;
  }

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
    </>
  );
};

export default App;
