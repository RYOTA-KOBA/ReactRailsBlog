import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts', {
        headers: { 'Content-Type': 'application/json' },
        data: {},
      })
      .then((res) => {
        console.log('投稿取得!!');
        console.log(res.data);
      })
      .catch((error) => {
        console.log('registration error', error);
      });
  }, []);

  return (
    <div>
      <h1>こんにちは</h1>
    </div>
  );
};

export default Posts;
