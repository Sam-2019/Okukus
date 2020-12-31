import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import Authentication from "./Authentication";

export const Context = createContext();

export const useAuthentication = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const auth = Authentication();
  return <Context.Provider value={auth}>{children}</Context.Provider>;
};

export default Context;

ContextProvider.propTypes = {
  children: PropTypes.node,
};
