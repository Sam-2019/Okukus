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
    theUser: null,
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
    this.setState({
      ...this.state,
      isAuth: false,
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

  isLoggedIn = async (formData) => {
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
        this.setState({
          ...this.state,
          isAuth: true,
          theUser: data.buyer,
        });
      } else {
        localStorage.removeItem("loginToken");
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
    };
    return (
      <auth.Provider value={contextValue}>{this.props.children}</auth.Provider>
    );
  }
}

export default authProvider;
