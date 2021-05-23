import React from "react";
import Header from "./atoms/Header";
import { useAuth } from "../contexts/AuthContext";
import "../styles/UserProfile.css";
import imgurl from "../assets/man.jpg";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";

const UserProfile = () => {
  const { currentUser } = useAuth();
  const uid = currentUser.id;
  const history = useHistory();

  const handleClickProfileEdit = () => {
    history.push(`/profile/${uid}/edit`);
  };

  return (
    <>
      <Header />
      <div className="profile-inner">
        <div className="profile-left">
          <div className="profile-img">
            <img src={imgurl} alt="" />
          </div>
          <div className="profile-text">
            <h2>{currentUser && currentUser.username}</h2>
            <h2>{currentUser && currentUser.id}</h2>
          </div>
        </div>
        <div className="profile-right">
          <Button
            className="profile-edit-btn"
            variant="contained"
            onClick={handleClickProfileEdit}
          >
            ユーザー情報の変更
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
