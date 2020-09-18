import React, { createContext, Component } from "react";
import {
  itemsGet,
  itemGet,
  tagsGet,
  tagGet,
  userLogin,
  userRegister,
  userValidate,
  userPasswordUpdate,
  userProfileUpdate,
  itemSearch,
  cartAdd,
  cartGet,
  cartCount,
  cartUpdate,
  cartDelete,
  orderCreate,
  orderHistory,
  orderDetail,
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

  logoutUser = () => {
    localStorage.removeItem("loginToken");
    localStorage.clear();

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

      if (data.validity === true && data.buyer === null) {
        localStorage.removeItem("loginToken");
      } else if (data.error === true) {
        localStorage.removeItem("loginToken");
      } else {
        this.setState({
          ...this.state,
          isAuth: true,
          firstName: data.buyer.firstname,
          lastName: data.buyer.lastname,
          email: data.buyer.email,
          uniqueID: data.buyer.unique_id,
        });
      }
    }
  };

  updateUserPassword = async (formData) => {
    const updatePassword = await axios({
      method: "post",
      url: userPasswordUpdate,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return updatePassword.data;
  };

  updateUserProfile = async (formData) => {
    const updateProfile = await axios({
      method: "post",
      url: userProfileUpdate,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return updateProfile.data;
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

  addCart = async (formData) => {
    const addcart = await axios({
      method: "post",
      url: cartAdd,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return addcart.data;
  };

  getCart = async (formData) => {
    const getcart = await axios({
      method: "post",
      url: cartGet,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return getcart.data;
  };

  countCart = async (formData) => {
    const countcart = await axios({
      method: "post",
      url: cartCount,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return countcart.data;
  };

  deleteCart = async (formData) => {
    const deletecart = await axios({
      method: "post",
      url: cartDelete,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return deletecart.data;
  };

  updateCart = async (formData) => {
    const updatecart = await axios({
      method: "post",
      url: cartUpdate,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return updatecart.data;
  };

  createOrder = async (formData) => {
    const createorder = await axios({
      method: "post",
      url: orderCreate,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return createorder.data;
  };

  historyOrder = async (formData) => {
    const historyorder = await axios({
      method: "post",
      url: orderHistory,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return historyorder.data;
  };

  detailOrder = async (formData) => {
    const detailorder = await axios({
      method: "post",
      url: orderDetail,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return detailorder.data;
  };

  render() {
    const contextValue = {
      rootState: this.state,
      
      getItems: this.getItems,
      getItem: this.getItem,
      getTags: this.getTags,
      getTag: this.getTag,

      logoutUser: this.logoutUser,
      loginUser: this.loginUser,
      registerUser: this.registerUser,
      isLoggedIn: this.isLoggedIn,
      updateUserPassword: this.updateUserPassword,
      updateUserProfile: this.updateUserProfile,

      searchItem: this.searchItem,

      addCart: this.addCart,
      getCart: this.getCart,
      countCart: this.countCart,
      deleteCart: this.deleteCart,
      updateCart: this.updateCart,

      createOrder: this.createOrder,
      historyOrder: this.historyOrder,
      detailOrder: this.detailOrder,

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
