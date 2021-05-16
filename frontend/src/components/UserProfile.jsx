import React from "react";
import Header from "./atoms/Header";
import { useAuth } from "../contexts/AuthContext";

const UserProfile = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Header />
      <div>
        <h2>{currentUser && currentUser.email}</h2>
        <h2>{currentUser && currentUser.id}</h2>
      </div>
    </>
  );
};

export default UserProfile;
