import React from 'react'
import Registration from './auth/Registration'

import axios from "axios";

import Login from "./auth/Login";


const Home = (props) => {

    const handleSuccessfulAuthentication = (data) => {
        props.handleLogin(data);
        props.history.push("/dashboard");
    };

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
      <Registration
        handleSuccessfulAuthentication={handleSuccessfulAuthentication}
      />
      <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </div>
  );
};

export default Home
