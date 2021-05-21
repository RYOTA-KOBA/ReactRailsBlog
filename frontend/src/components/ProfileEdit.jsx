import React from "react";
import { useAuth } from "../contexts/AuthContext";

import TextField from "@material-ui/core/TextField";

const ProfileEdit = () => {
  const { currentUser } = useAuth();

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="名前"
          variant="outlined"
          type="name"
          name="name"
          value={currentUser && currentUser.username}
          // onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="名前"
          variant="outlined"
          type="name"
          name="name"
          value={currentUser && currentUser.email}
          //   onChange={(event) => setUsername(event.target.value)}
        />
      </form>
    </div>
  );
};

export default ProfileEdit;
