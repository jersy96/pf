import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <p>Login</p>
      <ul>
        <li><Link to={'/'}>Landing Page</Link></li>
        <li><Link to={'/sign_up'}>Sign Up</Link></li>
      </ul>
    </div>
  );
};

export default Login;
