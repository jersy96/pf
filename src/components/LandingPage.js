import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <p>Landing Page</p>
      <ul>
        <li><Link to={'/login'}>Login</Link></li>
        <li><Link to={'/sign_up'}>Sign Up</Link></li>
      </ul>
    </div>
  );
};

export default LandingPage;
