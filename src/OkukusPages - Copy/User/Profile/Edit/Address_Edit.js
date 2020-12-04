import React, { useState } from "react";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import Message from "../../../Message/Message";
import { useAuthentication } from "../../../Auth/Context";

const Address_edit = ({ update, cancel }) => {
  const { updateUserProfile } = useAuthentication();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email0, setEmail0] = useState("");
  const [email1, setEmail1] = useState("");
  const [contact0, setContact0] = useState("");
  const [contact1, setContact1] = useState("");

  const [message, setMessage] = useState("");

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail0("");
    setEmail1("");
    setContact0("");
    setContact1("");
  };

  const updateData = async (event) => {
    event.preventDefault();

    var formData = new FormData();

    formData.set("firstname", firstname);
    formData.set("lastname", lastname);
    formData.set("email", email0);

    formData.set("email", email1);
    formData.set("email", contact0);
    formData.set("email", contact1);

    const data = await updateUserProfile(formData);

    if (data.data.error === true) {
      setMessage(data.data.message);
    } else {
      reset();
      update();
    }
  };

  return (
    <div className=" ">
    
        <Input
          type="text"
          placeholder="First Name"
          class_name="edit_input"
          action={(e) => setFirstName(e.target.value)}
          content={firstname}
        />

        <Input
          type="text"
          placeholder="Last Name"
          class_name="edit_input"
          action={(e) => setLastName(e.target.value)}
          content={lastname}
        />

        <Input
          type="email"
          placeholder="Email"
          class_name="edit_input"
          action={(e) => setEmail0(e.target.value)}
          content={email0}
        />

        <Input
          type="email"
          placeholder="Email"
          class_name="edit_input"
          action={(e) => setEmail1(e.target.value)}
          content={email1}
        />

        <Input
          type="number"
          placeholder="Contact"
          class_name="edit_input"
          action={(e) => setContact0(e.target.value)}
          content={contact0}
        />

        <Input
          type="number"
          placeholder="Contact 2"
          class_name="edit_input"
          action={(e) => setContact1(e.target.value)}
          content={setContact1}
        />

        {message ? <Message class_name="message " message={message} /> : null}
 

      <div className="button_wrapper ">
        <Button class_name="primary" action={updateData} name="Update" />
        <Button class_name="secondary" action={cancel} name="Cancel" />
      </div>
    </div>
  );
};

export default Address_edit;
