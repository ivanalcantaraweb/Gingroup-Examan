import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Parent from './components/ejercicio1/parent';
import ApiRest from './components/ejercicio2/apirest';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ejercicio2">
          <ApiRest />
        </Route>
        <Route path="/ejercicio1">
          <Parent />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
