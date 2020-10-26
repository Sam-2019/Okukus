import React from "react";
import { ContextProvider } from "./OkukusPages/Auth/Context";
import "bootstrap/dist/css/bootstrap.css";
import Okukus from './OkukusPages/Okukus'

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
