import React, { createContext, useState } from "react";
import axios from "axios";
export const MyContext = createContext();

const MyContextProvider = () => {
  const [showLogin, noShowLogin] = useState(true);
  const [isAuth, setnoAuth] = useState(false);
  const [theUser, notUser] = useState(null);

  // On Click the Log out button
 const logoutUser = () => {
    localStorage.removeItem("loginToken");
    isAuth()
  };

 const  registerUser = async (user) => {
    // Sending the user registration request
    const register = await axios.post(
      "https://okukus.com/api_call/user_login.php",
      {
        name: user.name,
        email: user.email,
        password: user.password,
      }
    );

    return register.data;
  };

 const  loginUser = async (user) => {
    // Sending the user Login request
    const login = await axios.post(
      "https://okukus.com/api_call/user_login.php",
      {
        email: user.email,
        password: user.password,
      }
    );
    return login.data;
  };

  // Checking user logged in or not
 const  isLoggedIn = async () => {
    const loginToken = localStorage.getItem("loginToken");

    // If inside the local-storage has the JWT token
    if (loginToken) {
      //Adding JWT token to axios default header
      axios.defaults.headers.common["Authorization"] = "bearer " + loginToken;

      // Fetching the user information
      const { data } = await axios.get("user-info.php");

      // If user information is successfully received
      if (data.success && data.user) {
        this.setState({
          ...this.state,
          isAuth: true,
          theUser: data.user,
        });
      }
    }
  };

  const contextValue = {
    isLoggedIn: isLoggedIn,
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };
  return (
    <MyContext.Provider value={contextValue}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
