import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Scroll = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const items = 15;
  const hasMore = true;

  function load() {
    axios({
      method: "get",
      url: `https://api.openbrewerydb.org/breweries?page=${pageNumber}&per_page=${items}`,
      responseType: "stream",
    }).then((response) => {
      setTimeout(() => {
        setData(response.data);
        setPageNumber(pageNumber + 1);
      }, 100);
    });
  }

  console.log(data);
  return (
    <>
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={load()}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {data.map((brewery) => (
          <ul className="user" key={brewery.name}>
            <li>Name: {brewery.name}</li>
          </ul>
        ))}
      </InfiniteScroll>

      {/* {data.map((item) => (
        <div key={item.id}>
          <p>
            ID: {item.id} Title: {item.product_name}
          </p>
        </div>
      ))} */}
    </>
  );
};

export default Scroll;
