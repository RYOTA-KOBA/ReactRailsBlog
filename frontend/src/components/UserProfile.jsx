import React from "react";
import Header from "./atoms/Header";
import { useAuth } from "../contexts/AuthContext";
import "../styles/UserProfile.css";
import imgurl from "../assets/man.jpg";

const UserProfile = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <Header />
      <div className="profile-inner">
        <div className="profile-img">
          <img src={imgurl} alt="" />
        </div>
        <div className="profile-text">
          <h2>{currentUser && currentUser.username}</h2>
          <h2>{currentUser && currentUser.id}</h2>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
