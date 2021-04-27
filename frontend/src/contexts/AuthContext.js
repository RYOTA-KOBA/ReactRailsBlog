import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AuthContext = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const login = () => {
    console.log("これはログインの関数です。");
  };

  const getUserData = () => {
    axios
      .get("http://localhost:3001/logged_in", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.logged_in) {
          setIsSignedIn(true);
          setCurrentUser(res.data.user);
          console.log("データ取得できました");
          console.log(res.data.user);
        } else {
          history.push("/login");
        }
      });
  };

  const value = {
    currentUser,
    setCurrentUser,
    setIsSignedIn,
    isSignedIn,
    login,
    getUserData,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
