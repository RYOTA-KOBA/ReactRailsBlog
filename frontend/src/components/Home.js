import React from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const Home = (props) => {
  const history = useHistory();

    const handleLogoutClick = () => {
        axios
        .delete("http://localhost:3001/logout", { withCredentials: true })
        .then((response) => {
          history.push("/login")
          // props.handleLogout();
          console.log('ログアウトしました')
        })
        .catch((error) => console.log("ログアウトエラー", error));
    };

  return (
    <div>
      <h1>Home</h1>
      {/* <h2>ログイン状態: {loggedInStatus}</h2> */}
      <button onClick={handleLogoutClick}>ログアウト</button>
    </div>
  );
};

export default Home
