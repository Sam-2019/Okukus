import React from "react";
import Item from "./Item";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import Spinner from "../Spinner/Spinner";
import Empty from "./Empty Cart";

const NotEmpty = () => {
  return <List />;
};


export default NotEmpty;
