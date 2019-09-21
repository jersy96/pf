import React from 'react';
import { Link } from 'react-router-dom';

const LocationsIndex = () => {
  return (
    <div>
      <p>Locations Index</p>
      <ul>
        <li><Link to={'/'}>Landing Page</Link></li>
        <li><Link to={'/my_profile'}>My Profile</Link></li>
      </ul>
    </div>
  );
};

export default LocationsIndex;
