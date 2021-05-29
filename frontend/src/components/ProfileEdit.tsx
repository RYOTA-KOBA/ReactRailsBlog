import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/ProfileEdit.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const ProfileEdit: React.FC = () => {
  const { currentUser }: any = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .put(
        'http://localhost:3001/users',
        {
          user: {
            id: currentUser.id,
            username: username,
            email: email,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        history.push('/');
        window.location.reload();
        console.log('編集が成功しました');
      })
      .catch((error) => {
        console.log('registration error', error);
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
            style={{ marginBottom: '20px' }}
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
            style={{ marginBottom: '20px' }}
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
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
