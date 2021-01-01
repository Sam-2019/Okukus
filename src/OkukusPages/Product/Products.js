import React, { useState, useEffect } from "react";
import View from "../Container/View/View";
import ViewLoading from "../Container/View/ViewLoading";
import Button from "../Button/Button";
import axios from "axios";
import { itemsGet } from "../endpoints";
import {
  useQuery,
  useQueryCache,
  QueryCache,
  useInfiniteQuery,
  ReactQueryCacheProvider,
} from "react-query";
import { useIntersectionObserver } from "../helpers";
// import Products from "../files/products";

function useProducs() {
  return useQuery("products", async () => {
    const { data } = await axios.get(itemsGet);

    return data;
  });
}

const App = () => {
  const cache = useQueryCache();
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    "projects",
    async (key, nextId = 0) => {
      const { data } = await axios.get("/api/projects?cursor=" + nextId);
      return data;
    },
    {
      getFetchMore: (lastGroup) => lastGroup.nextId,
    }
  );

  console.log(status);
  console.log(data);
  console.log(error);
  console.log(isFetching);
  console.log(isFetchingMore);
  console.log(fetchMore);
  console.log(canFetchMore);

  const loadMoreButtonRef = React.useRef();

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchMore,
    enabled: canFetchMore,
  });

  return (
    <div className=" ">
      <h1>Infinite Loading</h1>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          {data.map((page, i) => (
            <React.Fragment key={i}>
              {page.data.map((project) => (
                <p
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "10rem 1rem",
                  }}
                  key={project.id}
                >
                  {project.name}
                </p>
              ))}
            </React.Fragment>
          ))}
          <div>
            <button
              ref={loadMoreButtonRef}
              onClick={() => fetchMore()}
              disabled={!canFetchMore || isFetchingMore}
            >
              {isFetchingMore
                ? "Loading more..."
                : canFetchMore
                ? "Load More"
                : "Nothing more to load"}
            </button>
          </div>
          <div>
            {isFetching && !isFetchingMore ? "Background Updating..." : null}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
