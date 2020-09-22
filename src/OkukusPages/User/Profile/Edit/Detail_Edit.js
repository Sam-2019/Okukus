import React, { useState } from "react";
import { useAuthentication } from "../../../Auth/Context";
import "./edit.css";

const Detail_edit = ({ update }) => {
  const { updateUserProfile } = useAuthentication();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email0, setEmail0] = useState("");

  function update() {
    updateData();
    console.log(firstname)
  }

  const updateData = async (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email0);



    const data = await updateUserProfile(formData);
    console.log(data);
  };

  return (
    <div className="profile-body ">
      <input
        className="edit_input  edit_user_name "
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        className="edit_input  edit_user_name "
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        className="edit_input  edit_user_email"
        placeholder="Email"
        value={email0}
        onChange={(e) => setEmail0(e.target.value)}
      />
    </div>
  );
};

export default Detail_edit;
