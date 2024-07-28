import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import BlogPostForm from './components/BlogPostForm';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')) || []);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/create" element={<BlogPostForm posts={posts} setPosts={setPosts} />} />
        <Route path="/edit/:id" element={<BlogPostForm posts={posts} setPosts={setPosts} />} />
      </Routes>
    </div>
  );
};

export default App;
