import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../assets/Home.css";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Home = (props) => {
  const history = useHistory();
  const { currentUser } = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        history.push("/login");
        // props.handleLogout();
        window.location.reload();
        console.log("ログアウトしました");
      })
      .catch((error) => console.log("ログアウトエラー", error));
  };

  console.log(currentUser);

  return (
    <div>
      <header>
        <div className="header-inner">
          <div className="header-left">
            <p className="header-logo">LOGO</p>
          </div>
          <div className="header-right">
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <span className="header-username">
                  {currentUser && currentUser.email} <ArrowDropDownIcon />
                </span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
