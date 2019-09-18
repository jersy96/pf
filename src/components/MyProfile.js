import React from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
  return (
    <div>
      <p>MyProfile</p>
      <ul>
        <li><Link to={'/'}>Landing Page</Link></li>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
      </ul>
    </div>
  );
};

export default MyProfile;
