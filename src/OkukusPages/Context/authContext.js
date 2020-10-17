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
  userEmailUpdate,
  userAccountReset,
  userAccountVerify,
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
import {axiosMethod} from '../helpers'

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
    return items;
  };

  getItem = async (formData) => {
    const item = await axiosMethod(itemGet, formData);
    return item;
  };

  getTags = async () => {
    const tags = await axios(tagsGet);
    return tags;
  };

  getTag = async (formData) => {
    const tag = await axiosMethod(tagGet, formData);
    return tag;
  };

  logoutUser = () => {
    localStorage.removeItem("loginToken");
    localStorage.clear();
    setAuth(false);
    setFirstName();
    setLastName();
    setEmail();
    setUniqueID();
  };

  loginUser = async (formData) => {
    const login = await axiosMethod(userLogin, formData);
    return login.data;
  };

  registerUser = async (formData) => {
    const register = await axiosMethod(userRegister, formData);
    return register.data;
  };

  isLoggedIn = async () => {
    const loginToken = localStorage.getItem("loginToken");
    var formData = new FormData();

    formData.set("token", loginToken);

    if (loginToken) {
      const { data } = await axiosMethod(userValidate, formData);

      if (data.validity === true && data.buyer === null) {
        localStorage.removeItem("loginToken");
      } else if (data.error === true) {
        localStorage.removeItem("loginToken");
      } else {
        return (
          setAuth(true),
          setFirstName(data.buyer.firstname),
          setLastName(data.buyer.lastname),
          setEmail(data.buyer.email),
          setUniqueID(data.buyer.unique_id)
        );
      }
    }
  };

  updateUserPassword = async (formData) => {
    const updatePassword = await axiosMethod(userPasswordUpdate, formData);
    return updatePassword;
  };

  updateUserProfile = async (formData) => {
    const updateProfile = await axiosMethod(userProfileUpdate, formData);

    if (updateProfile.data.error === false) {
      setFirstName(updateProfile.data.data.firstname);
      setLastName(updateProfile.data.data.lastname);
    }
    return updateProfile;
  };

  updateUserEmail = async (formData) => {
    const updateEmail = await axiosMethod(userEmailUpdate, formData);

    if (updateEmail.data.error === false) {
      setEmail(updateEmail.data.data.email);
    }
    return updateEmail;
  };

  resetUserAccount = async (formData) => {
    const resetAccount = await axiosMethod(userAccountReset, formData);
    return resetAccount;
  };

  verifyUserAccount = async (formData) => {
    const verifyAccount = await axiosMethod(userAccountVerify, formData);
    return verifyAccount;
  };

  searchItem = async (formData) => {
    const search = await axiosMethod(itemSearch, formData);
    return search;
  };

  addCart = async (formData) => {
    const addcart = await axiosMethod(cartAdd, formData);
    return addcart;
  };

  getCart = async (formData) => {
    const getcart = await axiosMethod(cartGet, formData);
    return getcart;
  };

  countCart = async (formData) => {
    const countcart = await axiosMethod(cartCount, formData);

    return countcart;
  };

  deleteCart = async (formData) => {
    const deletecart = await axiosMethod(cartDelete, formData);
    return deletecart;
  };

  updateCart = async (formData) => {
    const updatecart = await axiosMethod(cartUpdate, formData);
    return updatecart;
  };

  createOrder = async (formData) => {
    const createorder = await axiosMethod(orderCreate, formData);
    return createorder;
  };

  historyOrder = async (formData) => {
    const historyorder = await axiosMethod(orderHistory, formData);
    return historyorder;
  };

  detailOrder = async (formData) => {
    const detailorder = await axiosMethod(orderDetail, formData);
    return detailorder;
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
