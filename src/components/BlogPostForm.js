import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BlogPostForm = ({ posts, setPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const post = posts.find((post) => post.id === id);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { id: id || Date.now().toString(), title, content };
    if (id) {
      setPosts(posts.map((post) => (post.id === id ? newPost : post)));
    } else {
      setPosts([...posts, newPost]);
    }
    navigate('/');
  };

  return (
    <section>
      <h2>{id ? 'Edit' : 'Create'} Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <div>
          <button type="submit">{id ? 'Update' : 'Create'} Post</button>
        </div>
      </form>
    </section>
  );
};

export default BlogPostForm;
