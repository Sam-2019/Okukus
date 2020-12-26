import React from "react";
import { ContextProvider } from "./OkukusPages/Auth/Context";
import "bootstrap/dist/css/bootstrap.css";
import Okukus from "./OkukusPages/Okukus";
import {
  useQueryCache,
  QueryCache,
  ReactQueryCacheProvider,
} from "react-query";

const queryCache = new QueryCache();

const App = () => {
  return (
    <ContextProvider>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <div className="body">
          <Okukus />
        </div>
      </ReactQueryCacheProvider>
    </ContextProvider>
  );
};

export default App;
