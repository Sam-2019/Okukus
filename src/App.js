import React from "react";
import AuthProvider from "./OkukusPages/Context/authContext";
import "bootstrap/dist/css/bootstrap.css";
import Okukus from "./OkukusPages/Okukus";

const App = () => {
  return (
    <AuthProvider>
      <div className="body-background">
        <Okukus />
      </div>
    </AuthProvider>
  );
};

export default App;
