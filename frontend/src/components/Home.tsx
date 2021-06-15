import React from 'react';
import Header from './atoms/Header';
import Posts from '../components/posts/Posts';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Posts />
    </div>
  );
};

export default Home;
