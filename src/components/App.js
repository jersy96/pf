import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './LandingPage'
import Login from './Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={LandingPage} />
          <Route path='/login' exact component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
