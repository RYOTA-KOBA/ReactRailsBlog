import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Auth = ({ children }) => {
  const { getUserData, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      getUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isSignedIn) {
    return <></>;
  } else {
    return children;
  }
};

export default Auth;
