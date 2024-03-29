import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <ul>
        <li><Link to={'/'}>Landing Page</Link></li>
        <li><Link to={'/my_profile'}>My Profile</Link></li>
        <li><Link to={'/locations'}>Locations Index</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
