import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Auth = ({ children }) => {
  const history = useHistory();
    const [isSignedIn, setIsSignedIn] = useState(false)
    // const [user, setUser] = useState({});

    useEffect(() => {
      if (!isSignedIn) {
          axios
            .get("http://localhost:3001/logged_in", {
              withCredentials: true,
            })
            .then((res) => {
              if (res.data.logged_in) {
                setIsSignedIn(true)
                // setUser(res.data.user)
              } else {
                history.push('/login')
              }
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isSignedIn) {
        return <></>
    } else {
        return children
    }
}

export default Auth
