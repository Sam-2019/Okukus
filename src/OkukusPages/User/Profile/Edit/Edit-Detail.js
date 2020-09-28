import React, { useState } from "react";
import Primary from "../../../Button/Primary";
import Secondary from "../../../Button/Secondary";
import { useAuthentication } from "../../../Auth/Context";
import "./edit.css";

const EditDetail = ({ update, cancel }) => {
  const { updateUserProfile, uniqueID } = useAuthentication();

  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  const [error, setError] = useState();

  const updateData = async (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("buyer_unique_id", uniqueID);
    formData.set("firstname", first_name);
    formData.set("lastname", last_name);

    const data = await updateUserProfile(formData);
    if (data.data.error === false) {
      setFirstName(data.data.firstname);
      setLastName(data.data.lastname);
      setError(null)
    } else {
      setError(data.data.message);
    }
    console.log(data);
    update();
  };

  const cancelUpdate = () => {
    cancel();
  };

  return (
    <div className=" ">
      <input
        className="edit_input  edit_user_name "
        placeholder="First Name"
        value={first_name}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        className="edit_input  edit_user_name "
        placeholder="Last Name"
        value={last_name}
        onChange={(e) => setLastName(e.target.value)}
      />

      <div className="message_wrapper ">
        {error ? <div className=" user_message "> {error}</div> : null}
      </div>

      <div className="button_wrapper ">
        <Primary name="Save" action={updateData} />
        <Secondary name="Cancel" action={cancelUpdate} />
      </div>
    </div>
  );
};

export default EditDetail;
