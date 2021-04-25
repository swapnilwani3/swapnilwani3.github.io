import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import AboutMe from "./AboutMe";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";

export default function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <nav className="navbar-list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route >
          <Route path="/blog/:id">
            <Blog />
          </Route>
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/resume">
              <Resume/>
          </Route>
          <Route path="/Contact">
              <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
