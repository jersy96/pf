import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <ul>
        <li><Link to={'/'}>Landing Page</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
