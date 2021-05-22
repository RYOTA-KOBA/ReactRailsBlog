import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import "../styles/ProfileEdit.css";
import TextField from "@material-ui/core/TextField";

const ProfileEdit = () => {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("submit");
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="メールアドレス"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
