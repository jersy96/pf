import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history'
import 'typeface-roboto';

import LandingPage from './LandingPage/LandingPage'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import Dashboard from './Dashboard'
import MyProfile from './MyProfile'
import LocationsIndex from './LocationsIndex'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' exact component={Login} />
          <Route path='/sign_up' exact component={SignUp} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/my_profile' exact component={MyProfile} />
          <Route path='/locations' exact component={LocationsIndex} />
        </div>
      </Router>
    </div>
  );
};

export default App;
