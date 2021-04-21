import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from "axios";

import Home from './components/Home'
import Dashboard from './components/Dashboard'

const App = () => {

    const [loggedInStatus, setLoggedInStatus] = useState("未ログイン");
    const [user, setUser] = useState({});

      const handleLogin = (data) => {
        setLoggedInStatus("ログインしてます");
        setUser(data.user);
      };

      const handleLogout = () => {
        setLoggedInStatus("未ログイン");
        setUser({});
      };

      const checkLoginStatus = () => {
        axios
          .get("http://localhost:3001/logged_in", { withCredentials: true })
          .then((response) => {
            console.log("ログイン状況", response);
            if (
              response.data.logged_in &&
              loggedInStatus === "未ログイン"
            ) {
              setLoggedInStatus("ログインしてます");
              setUser(response.data.user);
            } else if (
              !response.data.logged_in &&
              loggedInStatus === "ログインしてます"
            ) {
              setLoggedInStatus("未ログイン");
              setUser({});
            }
          })
          .catch((error) => {
            console.log("ログインエラー", error);
          });
      };

      useEffect(() => {
        checkLoginStatus();
      });

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={(props) => (
              <Home
                {...props}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={(props) => (
              <Dashboard {...props} loggedInStatus={loggedInStatus} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
