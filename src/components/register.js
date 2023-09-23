import './register.css';
import React, { useState } from 'react';
import UsersApiClient from '../services/UsersApiClient.js';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = { username, password, email };
    const apiClient = new UsersApiClient();
    try {
      const response = await apiClient.createUser(user);
      setMessage(`User ${response.username} created successfully!`);
    } catch (error) {
      setMessage('Error creating user. Please try again.');
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Login;