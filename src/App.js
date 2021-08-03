import React from 'react';
import { Switch } from 'react-router';

import 'rsuite/dist/styles/rsuite-default.css';
import PriviteRoute from './components/PriviteRoute';
import PublicRoute from './components/PublicRoute';
import { ProfileProvider } from './context/profile.context';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './styles/main.scss';

function App() {
  return (
    <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PriviteRoute path="/">
          <Home />
        </PriviteRoute>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
