import React, { useState, useEffect } from "react";
import View from "../Container/View/View";
import View2 from "../Container/View/View2";
import Button from "../Button/Button";
import axios from "axios";
import { itemsGet } from "../apis";


function shuffle(array) {
  var result = [],
    source = array.concat([]);

  while (source.length) {
    let index = Math.floor(Math.random() * source.length);
    result.push(source[index]);
    source.splice(index, 1);
  }

  return result;
}

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

  let random = shuffle(data);

  console.log(data);

  let content = data.map((products, i) => <View key={i} {...products} />);

  const Skele = () => {
    return (
      <>
        {Array(4)
          .fill()
          .map((item, index) => (
            <View2 key={index} />
          ))}
      </>
    );
  };

  return (
    <>
      <div className="products_wrapper">{content}</div>

      <div className="products_wrapper">{loading ? <Skele /> : null}</div>

      {/* {data.map((item) => (
        <div key={item.id}>
          <p>
            ID: {item.id} Title: {item.product_name}
          </p>
        </div>
      ))} */}

      <div>
        {loading ? (
          <div className="products_wrapper">
            <Skele />
          </div>
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
