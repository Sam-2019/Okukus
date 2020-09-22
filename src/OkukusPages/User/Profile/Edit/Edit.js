import React, { useState } from "react";
import "./edit.css";

const Edit = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email0, setEmail0] = useState("");
  const [email1, setEmail1] = useState("");
  const [contact0, setContact0] = useState("");
  const [contact1, setContact1] = useState("");

  return (
    <div className="account">
      <div className="account_detail">
        <div className="profile-header">
          <div> Details</div>

          <button>Done</button>
        </div>

        <div className="profile-body ">
          <input
            className="edit_input  edit_user_name "
            placeholder="First Name"
            value={firstname}
          />

          <input
            className="edit_input  edit_user_name "
            placeholder="Last Name"
            value={lastname}
          />

          <input
            className="edit_input  edit_user_email"
            placeholder="Email"
            value={email0}
          />
        </div>
      </div>

      <div className="address_book">
        <div className="profile-header">
          <div>Address Book</div>

          <button>Done</button>
        </div>
        <div className="profile-body ">
          <div>Your default shipping address:</div>

          <div className="px-2 profile-text">
            <input
              className="edit_input  edit_user_name "
              placeholder="First Name"
              value={firstname}
            />

            <input
              className="edit_input  edit_user_name "
              placeholder="Last Name"
              value={lastname}
            />
            <input
              className="edit_input  edit_user_email"
              placeholder="Email"
              value={email0}
            />
            <input
              className="edit_input  edit_user_email"
              placeholder="Email"
              value={email1}
            />
            <input
              className="edit_input  edit_user_contact"
              placeholder="Contact"
              value={contact0}
            />
            <input
              className="edit_input  edit_user_contact"
              placeholder="Contact 2"
              value={contact1}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
