import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from "axios";

import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";

const App = () => {

    const [loggedInStatus, setLoggedInStatus] = useState("未ログイン");
    const [user, setUser] = useState({});

      const handleLogin = (data) => {
        setLoggedInStatus("ログインなう");
        console.log('ログインステータス→' + loggedInStatus);
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
            if (response.data.logged_in && loggedInStatus === "未ログイン") {
              setLoggedInStatus("ログインなう");
              setUser(response.data.user);
            } else if (
              !response.data.logged_in &&
              loggedInStatus === "ログインなう"
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
            path={"/login"}
            render={(props) => (
              <Login
                {...props}
                handleLogin={handleLogin}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={"/signup"}
            render={(props) => (
              <Registration
                {...props}
                handleLogin={handleLogin}
                loggedInStatus={loggedInStatus}
              />
            )}
          />
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
