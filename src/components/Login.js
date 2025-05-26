import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleBypassLogin = (e) => {
    e.preventDefault();
    onLogin(true); // Simulate login
    navigate('/accomplishments'); // Redirect
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleBypassLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter any email"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter any password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;