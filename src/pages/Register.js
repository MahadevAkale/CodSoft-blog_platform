import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { email, password, name };
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
    navigate('/');
  };

  return (
    <main>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </main>
  );
};

export default Register;
