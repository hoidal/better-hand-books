import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import HomePage from './pages/home-page/homepage.container.jsx';
import TakeActionPage from './pages/take-action-page/take-action-page.container.jsx';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
          <div id="content-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/take-action" component={TakeActionPage} />
            </Switch>
          </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;




