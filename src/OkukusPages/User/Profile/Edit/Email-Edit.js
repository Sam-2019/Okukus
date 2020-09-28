import React, { useState } from "react";
import Primary from "../../../Button/Primary";
import { useAuthentication } from "../../../Auth/Context";
import "./edit.css";

const EditDetail = ({ update }) => {
  const { updateUserProfile, uniqueID, email } = useAuthentication();
  const [e_mail, setEmail] = useState(email);
  const [error, setError] = useState();

  const updateData = async (event) => {
    update();

    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("email", email);

    const data = await updateUserProfile(formData);
    console.log(data);
  };

  return (
    <div className=" ">
      <input
        className="edit_input  edit_user_name "
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />



      <div className="message_wrapper ">
        {error ? <div className=" user_message "> {error}</div> : null}
      </div>

      <div className="button_wrapper ">
        <Primary name="Save Changes" action={updateData} />
      </div>
    </div>
  );
};

export default EditDetail;
