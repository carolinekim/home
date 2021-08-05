import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Love from './components/Love';
import Misc from './components/Misc';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/contact">
        <Contact/>
      </Route>
      <Route path="/experience">
        <Experience/>
      </Route>
      <Route path="/love">
        <Love/>
      </Route>
      <Route path="/misc">
        <Misc/>
      </Route>
      <Route path="/projects">
        <Projects/>
      </Route>
    </Router>
  );
}

export default App;
