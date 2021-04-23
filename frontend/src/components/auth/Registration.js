import React, { useState } from 'react'
import axios from 'axios'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";


const Registration = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSuccessfulAuthentication = (data) => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    //追加
    axios
      .post(
        "http://localhost:3001/signup",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("registration res", response);
        if (response.data.status === "created") {
          handleSuccessfulAuthentication(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  };

  return (
    <div>
      <p>新規登録</p>

      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="メールアドレス"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="パスワード"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="確認用パスワード"
          variant="outlined"
          type="password"
          name="password_confirmation"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        />

        <Button type="submit" variant="contained" color="primary">
          登録
        </Button>
      </form>

      <a href="/login">ログインはこちら</a>
    </div>
  );
};
export default Registration