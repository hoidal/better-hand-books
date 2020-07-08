import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import NavBar from './components/navbar/navbar.component.jsx';
import Footer from './components/footer/footer.component.jsx';
import HomePage from './pages/home-page/homepage.container.jsx';
import TakeActionPage from './pages/take-action-page/take-action-page.container.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/take-action" component={TakeActionPage} />
          </Switch>
      <Footer />
      </div>
    </div>
  );
}

export default App;




