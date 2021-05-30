import React, { useState } from 'react';
import '../styles/PostForm.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const PostForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('投稿しました');
  };

  return (
    <div>
      <h2 className="post-form-h2">投稿作成画面</h2>
      <form onSubmit={handlesubmit} className="post-form">
        <TextField
          className="post-form-textfield"
          id="outlined-basic"
          label="タイトル"
          variant="outlined"
          type="text"
          name="title"
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
        <TextField
          className="post-form-textfield"
          id="outlined-basic"
          label="本文"
          variant="outlined"
          type="text"
          name="content"
          multiline={true}
          value={content}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setContent(event.target.value)
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="post-form-btn">
          投稿
        </Button>
        <a href="/" className="post-form-cancel">
          キャンセル
        </a>
      </form>
    </div>
  );
};

export default PostForm;
