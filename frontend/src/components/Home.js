import React from 'react'
import Registration from './auth/Registration'

import axios from "axios";

const Home = (props) => {

    const handleLogoutClick = () => {
        axios
        .delete("http://localhost:3001/logout", { withCredentials: true })
        .then((response) => {
            props.handleLogout();
        })
        .catch((error) => console.log("ログアウトエラー", error));
    };

  return (
    <div>
      <h1>Home</h1>
      <h2>ログイン状態: {props.loggedInStatus}</h2>
      <button onClick={handleLogoutClick}>ログアウト</button>
    </div>
  );
};

export default Home
