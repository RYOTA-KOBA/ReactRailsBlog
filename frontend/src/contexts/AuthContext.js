import React, { useContext } from "react";

const AuthContext = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const login = () => {
    console.log("これはログインの関数です。");
  };

  const value = {
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
