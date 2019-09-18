import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history'

import LandingPage from './LandingPage'
import Login from './Login'

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' exact component={Login} />
        </div>
      </Router>
    </div>
  );
};

export default App;
