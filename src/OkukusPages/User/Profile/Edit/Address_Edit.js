import React, { useState } from "react";
import Input from "../../../Input/Input";
import Button from "../../../Button/Button";
import Message from '../../../Message/Message'
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
    console.log(data);

    if (data.data.error === true) {
      setMessage(data.data.message);
    } else {
      reset();
      update();
    }
  };

  return (
    <div className=" ">
      <div>
        <Input
          type="text"
          placeholder="First Name"
          classname="edit_input"
          action={(e) => setFirstName(e.target.value)}
          value={firstname}
        />

        <Input
          type="text"
          placeholder="Last Name"
          classname="edit_input"
          action={(e) => setLastName(e.target.value)}
          value={lastname}
        />

        <Input
          type="email"
          placeholder="Email"
          classname="edit_input"
          action={(e) => setEmail0(e.target.value)}
          value={email0}
        />

        <Input
          type="email"
          placeholder="Email"
          classname="edit_input"
          action={(e) => setEmail1(e.target.value)}
          value={email1}
        />

        <Input
          type="number"
          placeholder="Contact"
          classname="edit_input"
          action={(e) => setContact0(e.target.value)}
          value={contact0}
        />

        <Input
          type="number"
          placeholder="Contact 2"
          classname="edit_input"
          action={(e) => setContact1(e.target.value)}
          value={setContact1}
        />

        <div className="message_wrapper ">
          {message ? (
            <Message classname="message " message={message} />
          ) : null}

        </div>
      </div>

      <div className="button_wrapper ">
        <Button classname="primary" action={updateData} name="Update" />
        <Button classname="secondary" action={cancel} name="Cancel" />
      </div>
    </div>
  );
};

export default Address_edit;
