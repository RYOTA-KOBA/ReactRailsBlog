import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

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
      <h1>Home</h1>
      {/* <h2>ログイン状態: {loggedInStatus}</h2> */}
      {currentUser && (
        <div>
          <h3>{currentUser.email}</h3>
          <h3>{currentUser.created_at}</h3>
        </div>
      )}
      <button onClick={handleLogoutClick}>ログアウト</button>
    </div>
  );
};

export default Home;
