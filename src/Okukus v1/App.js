import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import OkukusV1 from './Okukus/Okukus'
import AuthProvider from "./Okukus/Context/authContext";

const App = () => {
  return (

    <AuthProvider>
      <div className="body-background">
        <OkukusV1 />
      </div>
    </AuthProvider>

  );
};

export default App;
