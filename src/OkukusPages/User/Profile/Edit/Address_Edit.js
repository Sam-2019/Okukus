import React, { useState } from "react";
import Primary from "../../../Button/Primary";
import Secondary from "../../../Button/Secondary";
import { useAuthentication } from "../../../Auth/Context";
import "./edit.css";

const Address_edit = ({ update, cancel }) => {
  const { updateUserProfile } = useAuthentication();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email0, setEmail0] = useState("");
  const [email1, setEmail1] = useState("");
  const [contact0, setContact0] = useState("");
  const [contact1, setContact1] = useState("");

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail0("");
    setEmail1("");
    setContact0("");
    setContact1("");
    cancel();
  };

  const updateData = async (event) => {
    update();
    console.log(firstname);
    event.preventDefault();

    var formData = new FormData();

    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email0);

    formData.set("email", email1);
    formData.set("email", contact0);
    formData.set("email", contact1);

    const data = await updateUserProfile(formData);
    console.log(data);
  };

  return (
    <div className=" ">
      <input
        className="edit_input  "
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        className="edit_input  "
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="edit_input "
        placeholder="Email"
        value={email0}
        onChange={(e) => setEmail0(e.target.value)}
      />
      <input
        className="edit_input "
        placeholder="Email"
        value={email1}
        onChange={(e) => setEmail1(e.target.value)}
      />
      <input
        className="edit_input"
        placeholder="Contact"
        value={contact0}
        onChange={(e) => setContact0(e.target.value)}
      />
      <input
        className="edit_input "
        placeholder="Contact 2"
        value={contact1}
        onChange={(e) => setContact1(e.target.value)}
      />
      <div className="button_wrapper ">
        <Primary name="Update" action={updateData} />
        <Secondary name="Cancel" action={reset} />
      </div>
    </div>
  );
};

export default Address_edit;
