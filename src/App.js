import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/users">
        <h2>Users</h2>
      </Route>
      <Route path="/actions">
        <h2>Actions</h2>
      </Route>
    </Router>
  );
}

export default App;
