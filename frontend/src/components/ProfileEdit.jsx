import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/ProfileEdit.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const ProfileEdit = () => {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const uid = currentUser.id;

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:3001/users/update",
        {
          user: {
            username: username,
            email: email,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("編集が成功しました");
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email);
      setUsername(currentUser.username);
    }
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="edit-form">
          <TextField
            id="outlined-basic"
            label="名前"
            variant="outlined"
            type="name"
            name="name"
            style={{ marginBottom: "20px" }}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="メールアドレス"
            variant="outlined"
            type="email"
            name="email"
            style={{ marginBottom: "20px" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            変更
          </Button>
        </div>
      </form>
      {/* <a className="cancel-edit-link" href={currentUser && `/profile/${uid}`}>
        変更をキャンセル
      </a> */}
    </div>
  );
};

export default ProfileEdit;
