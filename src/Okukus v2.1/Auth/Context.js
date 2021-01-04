import React, { createContext, useContext } from "react";
import Authentication from "./Authentication";

export const Context = createContext();

export function ContextProvider({ children }) {
  const auth = Authentication();
  return <Context.Provider value={auth}>{children}</Context.Provider>;
}

export const useAuthentication = () => {
  return useContext(Context);
};

export default Context;
