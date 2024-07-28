import React from 'react';
import { Link } from 'react-router-dom';

const BlogPostList = ({ posts, setPosts }) => {
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <main>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <article key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div>
            <Link to={`/post/${post.id}`}>Read More</Link>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        </article>
      ))}
    </main>
  );
};

export default BlogPostList;
