import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <p>Sign Up</p>
      <ul>
        <li><Link to={'/'}>Landing Page</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
      </ul>
    </div>
  );
};

export default SignUp;
