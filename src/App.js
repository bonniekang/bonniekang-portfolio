import React from 'react';
import  { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Intro from './components/Intro'
import Skills from './components/Skills'
import Works from './components/Works'
import About from './components/About'
import Navbar from './Navbar'
import './app.scss'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
          <div className="section">
            <Switch>
              <Route path="/home" exact component={Intro}/>
              <Route path="/skills" exact component={Skills}/>
              <Route path="/works" exact component={Works}/>
              <Route path="/about" exact component={About}/>
              <Redirect from="*" to="/home" />
            </Switch>
          </div>
      </Router>
    </div>
  )
}

export default App;
