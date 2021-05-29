import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSuccessfulAuthentication = () => {
    history.push('/');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    axios
      .post(
        'http://localhost:3001/login',
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleSuccessfulAuthentication();
        }
      })
      .catch((error) => {
        console.log('registration error', error);
      });
    event.preventDefault();
  };

  return (
    <div>
      <p>ログイン</p>

      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="メールアドレス"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(event.target.value)
          }
        />
        <TextField
          id="outlined-basic"
          label="パスワード"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
        />

        <Button type="submit" variant="contained" color="primary">
          ログイン
        </Button>
      </form>
      <a href="/signup">新規会員登録はこちら</a>
    </div>
  );
};
export default Login;
