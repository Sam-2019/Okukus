import React from "react";
import { ContextProvider } from "./OkukusPages/Auth/Context";
import "bootstrap/dist/css/bootstrap.css";
import Okukus from "./OkukusPages/Okukus";
// import Future from "./Future1";

const App = () => {
  return (
    <ContextProvider>
      <div className="body">
        <Okukus />
      </div>
    </ContextProvider>
  );
};

export default App;
