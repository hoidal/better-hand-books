import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import MainNavBar from './components/main-nav-bar/main-nav-bar.component';
import MainFooter from './components/main-footer/main-footer.component';
import HomePage from './pages/home-page/home-page.container';
import TakeActionPage from './pages/take-action-page/take-action-page.container';

function App() {
  return (
    <div className="App">
      <MainNavBar />
        <div className="content">
          <div className="content-inside">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/take-action" component={TakeActionPage} />
            </Switch>
          </div>
        </div>
      <MainFooter />
    </div>
  );
}

export default App;
