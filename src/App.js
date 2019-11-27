import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './screens/Login'
import Home from './screens/Home'

import './App.css';

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
