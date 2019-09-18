import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <p>Landing Page</p>
      <Link to={'/login'}>Login</Link>
    </div>
  );
};

export default LandingPage;
