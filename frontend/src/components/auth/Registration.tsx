import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Registration: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSuccessfulAuthentication = () => {
    history.push('/');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //追加
    axios
      .post(
        'http://localhost:3001/signup',
        {
          user: {
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log('registration res', response);
        if (response.data.status === 'created') {
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
      <p>新規登録</p>

      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="名前"
          variant="outlined"
          type="name"
          name="name"
          value={username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
        />
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
        <TextField
          id="outlined-basic"
          label="確認用パスワード"
          variant="outlined"
          type="password"
          name="password_confirmation"
          value={passwordConfirmation}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordConfirmation(event.target.value)
          }
        />

        <Button type="submit" variant="contained" color="primary">
          登録
        </Button>
      </form>

      <a href="/login">ログインはこちら</a>
    </div>
  );
};
export default Registration;
