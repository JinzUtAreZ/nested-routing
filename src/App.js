import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Create from './pages/Create';
import Navbar from './layout/NavbarHeader';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
