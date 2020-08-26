import React, { createContext, Component } from "react";
import { userLogin, userRegister, userValidate } from "../apis";
import axios from "axios";

export const auth = createContext();

class authProvider extends Component {
  constructor() {
    super();
    this.isLoggedIn();
  }

  state = {
    showLogin: true,
    isAuth: false,
    firstName: null,
    lastName: null,
    email: null,
    uniqueID: null,
  };

  toggleNav = () => {
    const showLogin = !this.state.showLogin;
    this.setState({
      ...this.state,
      showLogin,
    });
  };

  logoutUser = () => {
    localStorage.removeItem("loginToken");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("email");
    localStorage.removeItem("uniqueID");
    this.setState({
      ...this.state,
      isAuth: false,
      firstName: null,
      lastName: null,
      email: null,
      uniqueID: null,
    });
  };

  registerUser = async (formData) => {
    const register = await axios({
      method: "post",
      url: userRegister,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return register.data;
  };

  loginUser = async (formData) => {
    const login = await axios({
      method: "post",
      url: userLogin,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return login.data;
  };

  isLoggedIn = async () => {
    const loginToken = localStorage.getItem("loginToken");
    var formData = new FormData();

    formData.set("token", loginToken);

    if (loginToken) {
      const { data } = await axios({
        method: "post",
        url: userValidate,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
 

      if (data.error === false && data.validity === true) {
        localStorage.setItem("firstname", data.buyer.firstname);
        localStorage.setItem("lastname", data.buyer.lastname);
        localStorage.setItem("email", data.buyer.email);
        localStorage.setItem("uniqueID", data.buyer.unique_id);
        this.setState({
          ...this.state,
          isAuth: true,
          firstName: data.buyer.firstname,
          lastName: data.buyer.lastname,
          email: data.buyer.email,
          uniqueID: data.buyer.unique_id,
        });
      } else {
        localStorage.removeItem("loginToken");
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
        localStorage.removeItem("email");
        localStorage.removeItem("uniqueID");
      }
    }
  };

  render() {
    const contextValue = {
      rootState: this.state,
      toggleNav: this.toggleNav,
      isLoggedIn: this.isLoggedIn,
      registerUser: this.registerUser,
      loginUser: this.loginUser,
      logoutUser: this.logoutUser,
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      uniqueID: this.uniqueID
    };
    return (
      <auth.Provider value={contextValue}>{this.props.children}</auth.Provider>
    );
  }
}

export default authProvider;
