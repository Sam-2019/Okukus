import React from "react";
import AuthProvider from "./Okukus/Context/authContext";
import Okukus from "./Okukus/Okukus";
import "bootstrap/dist/css/bootstrap.css";


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
