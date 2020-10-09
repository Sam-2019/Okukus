import React from "react";
import { useHistory } from "react-router-dom";

import './profilemenu.css'

const ProfileMenu = ({ logout, showMenu }) => {

  let history = useHistory();
  return (
    <div className="profile_menu" >
      <div
        className="menu_item"
        onClick={() => {
          history.push("/profile");
          showMenu();
        }}
      >
        Profile
      </div>
      <div
        className="menu_item"
        onClick={() => {
          logout();
          showMenu();
        }}
      >
        Logout
      </div>
    </div>
  );
};

export default ProfileMenu;
