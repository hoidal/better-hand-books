import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import MainNavBar from './components/main-nav-bar/main-nav-bar.component';
import HomePage from './pages/home-page/home-page.container';

function App() {
  return (
    <div>
      <MainNavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
