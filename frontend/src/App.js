import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Auth from "./components/auth/Auth";
import UserProfile from "./components/UserProfile";
import ProfileEdit from "./components/ProfileEdit";

const App = () => {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン");

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })

      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "未ログイン") {
          setLoggedInStatus("ログインなう");
        } else if (
          !response.data.logged_in &&
          loggedInStatus === "ログインなう"
        ) {
          setLoggedInStatus("未ログイン");
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
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/signup"} component={Registration} />
            <Auth>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/dashboard"} component={Dashboard} />
              <Route exact path={"/profile/:id"} component={UserProfile} />
              <Route exact path={"/profile/:id/edit"} component={ProfileEdit} />
            </Auth>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
