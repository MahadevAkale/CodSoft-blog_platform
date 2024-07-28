import React from 'react';
import BlogPostList from '../components/BlogPostList';

const Home = ({ posts, setPosts }) => {
  return (
    <div>
      <BlogPostList posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default Home;
