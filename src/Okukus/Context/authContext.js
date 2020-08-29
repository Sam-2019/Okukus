import React, { createContext, Component } from "react";
import {
  userLogin,
  userRegister,
  userOrder,
  userValidate,
  userOrderHistory,
  itemSearch,
  itemsGet,
  itemGet,
  tagsGet,
  tagGet,
} from "../apis";
import axios from "axios";

export const auth = createContext();

class AuthProvider extends Component {
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

  getItems = async () => {
    const items = await axios(itemsGet);
    return items.data;
  };

  getItem = async (formData) => {
    const item = await axios({
      method: "post",
      url: itemGet,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return item.data;
  };

  getTags = async () => {
    const tags = await axios(tagsGet);
    return tags.data;
  };

  getTag = async (formData) => {
    const tag = await axios({
      method: "post",
      url: tagGet,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return tag.data;
  };

  orderItem = async (formData) => {
    const order = await axios({
      method: "post",
      url: userOrder,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return order.data;
  };

  orderHistory = async (formData) => {
    const orderHistory = await axios({
      method: "post",
      url: userOrderHistory,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return orderHistory.data;
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

  loginUser = async (formData) => {
    const login = await axios({
      method: "post",
      url: userLogin,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return login.data;
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

  searchItem = async (formData) => {
    const search = await axios({
      method: "post",
      url: itemSearch,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return search.data;
  };

  render() {
    const contextValue = {
      rootState: this.state,
      getItems: this.getItems,
      getItem: this.getItem,
      getTags: this.getTags,
      getTag: this.getTag,
      orderItem: this.orderItem,
      orderHistory: this.orderHistory,
      logoutUser: this.logoutUser,
      loginUser: this.loginUser,
      registerUser: this.registerUser,
      isLoggedIn: this.isLoggedIn,
      searchItem: this.searchItem,
      firstName: this.firstname,
      lastName: this.lastname,
      email: this.email,
      uniqueID: this.uniqueID,
    };
    return (
      <auth.Provider value={contextValue}>{this.props.children}</auth.Provider>
    );
  }
}

export default AuthProvider;
