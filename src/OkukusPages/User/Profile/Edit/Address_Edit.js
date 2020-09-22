import React, { useState } from "react";
import { useAuthentication } from "../../../Auth/Context";
import "./edit.css";

const Address_edit = ({ update }) => {
  const { updateUserProflie } = useAuthentication();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email0, setEmail0] = useState("");
  const [email1, setEmail1] = useState("");
  const [contact0, setContact0] = useState("");
  const [contact1, setContact1] = useState("");

  update = async (event) => {
    event.preventDefault();
    var formData = new FormData();

    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email0);

    formData.set("email", email1);
    formData.set("email", contact0);
    formData.set("email", contact1);

    const data = await updateUserProflie(formData);
    console.log(data);
  };

  return (
    <div className="px-2 profile-text">
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
      <input
        className="edit_input  edit_user_email"
        placeholder="Email"
        value={email1}
        onChange={(e) => setEmail1(e.target.value)}
      />
      <input
        className="edit_input  edit_user_contact"
        placeholder="Contact"
        value={contact0}
        onChange={(e) => setContact0(e.target.value)}
      />
      <input
        className="edit_input  edit_user_contact"
        placeholder="Contact 2"
        value={contact1}
        onChange={(e) => setContact1(e.target.value)}
      />
    </div>
  );
};

export default Address_edit;
