import React, { useState, useEffect } from 'react';
import axios from 'axios';

type D = {
  id: string;
  content: string;
  title: string;
  created_at: number;
  updated_at: number;
};

const Posts: React.FC = () => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        setPostsData(res.data);
      })
      .catch((error) => {
        console.log('registration error', error);
      });
  }, []);

  return (
    <div>
      <h1>こんにちは</h1>
      {postsData &&
        postsData.map((data: D) => (
          <ul key={data.id}>
            <li>{data.title}</li>
            <li>{data.content}</li>
          </ul>
        ))}
    </div>
  );
};

export default Posts;
