import { useState, useEffect, useRef } from "react";
import axios from "axios";
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
import { axiosMethod } from "../helpers";

const Authentication = () => {

  

  const [Auth, setAuth] = useState(true);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [uniqueID, setUniqueID] = useState();


  const getItems = async () => {
    const items = await axios(itemsGet);
    return items;
  };

  const getItem = async (formData) => {
    const item = await axiosMethod(itemGet, formData);
    return item;
  };

  const getTags = async () => {
    const tags = await axios(tagsGet);
    return tags;
  };

  const getTag = async (formData) => {
    const tag = await axiosMethod(tagGet, formData);
    return tag;
  };

  const logoutUser = () => {
    localStorage.removeItem("loginToken");
    localStorage.clear();
    setAuth(false);
    setFirstName();
    setLastName();
    setEmail();
    setUniqueID();
  };

  const loginUser = async (formData) => {
    const login = await axiosMethod(userLogin, formData);
    return login.data;
  };

  const registerUser = async (formData) => {
    const register = await axiosMethod(userRegister, formData);
    return register.data;
  };

  const isLoggedIn = async () => {
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

  const updateUserPassword = async (formData) => {
    const updatePassword = await axiosMethod(userPasswordUpdate, formData);

    return updatePassword;
  };

  const updateUserProfile = async (formData) => {
    const updateProfile = await axiosMethod(userProfileUpdate, formData);

    if (updateProfile.data.error === false) {
      setFirstName(updateProfile.data.data.firstname);
      setLastName(updateProfile.data.data.lastname);
    }
    return updateProfile;
  };

  const updateUserEmail = async (formData) => {
    const updateEmail = await axiosMethod(userEmailUpdate, formData);

    if (updateEmail.data.error === false) {
      setEmail(updateEmail.data.data.email);
    }
    return updateEmail;
  };

  const resetUserAccount = async (formData) => {
    const resetAccount = await axiosMethod(userAccountReset, formData);
    return resetAccount;
  };

  const verifyUserAccount = async (formData) => {
    const verifyAccount = await axiosMethod(userAccountVerify, formData);
    console.log(verifyAccount);
  };

  const searchItem = async (formData) => {
    const search = await axiosMethod(itemSearch, formData);
    return search;
  };

  const addCart = async (formData) => {
    const addcart = await axiosMethod(cartAdd, formData);
    return addcart;
  };

  const getCart = async (formData) => {
    const getcart = await axiosMethod(cartGet, formData);
    return getcart;
  };

  const countCart = async (formData) => {
    const countcart = await axiosMethod(cartCount, formData);

    return(countcart);
  };

  const deleteCart = async (formData) => {
    const deletecart = await axiosMethod(cartDelete, formData);
    return deletecart;
  };

  const updateCart = async (formData) => {
    const updatecart = await axiosMethod(cartUpdate, formData);
    return updatecart;
  };

  const createOrder = async (formData) => {
    const createorder = await axiosMethod(orderCreate, formData);
    return createorder;
  };

  const historyOrder = async (formData) => {
    const historyorder = await axiosMethod(orderHistory, formData);
    return historyorder;
  };

  const detailOrder = async (formData) => {
    const detailorder = await axiosMethod(orderDetail, formData);
    return detailorder;
  };

  useEffect(() => {

    const unsubscribe = isLoggedIn((loginToken) => {
      if (loginToken) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    Auth,

    getItems,
    getItem,
    getTags,
    getTag,

    logoutUser,
    loginUser,
    registerUser,
    isLoggedIn,
    updateUserPassword,
    updateUserProfile,
    updateUserEmail,
    resetUserAccount,
    verifyUserAccount,

    searchItem,

    addCart,
    getCart,
    countCart,
    deleteCart,
    updateCart,

    createOrder,
    historyOrder,
    detailOrder,

    firstName,
    lastName,
    email,
    uniqueID,
  };
};

export default Authentication;
