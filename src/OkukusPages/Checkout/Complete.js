import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../Auth/Context";
import Button from "../Button/Button";

const Complete = () => {
  const { } = useAuthentication();
  let history = useHistory();



  return (
    <div>
      <div className="page_title">Orders Placed! </div>

   

 

        <div className="button_wrapper ">
          <Button
            name="Continue Shopping"
            class_name="primary"
            action={() => {
              history.push("/");
            }}
          />
        </div>

      </div>
   
  );
};

export default Complete;
