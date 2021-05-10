import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../assets/Home.css";
import axios from "axios";

const Home = (props) => {
  const history = useHistory();
  const { currentUser } = useAuth();

  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        history.push("/login");
        // props.handleLogout();
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
            <p>
              こんにちは
              <span className="header-username">
                {currentUser && currentUser.email}
              </span>
              さん
            </p>
          </div>
        </div>
      </header>
      <h1>Home</h1>
      <button onClick={handleLogoutClick}>ログアウト</button>
    </div>
  );
};

export default Home;
