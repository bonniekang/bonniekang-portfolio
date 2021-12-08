import React from 'react';
import  { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Intro from './components/Intro'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Navbar from './Navbar'
import './app.scss'

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
          <div className="section">
            <Switch>
              <Route path="/" exact component={Intro}/>
              <Route path="/skills" exact component={Skills}/>
              <Route path="/works" exact component={Works}/>
              <Route path="/contact" exact component={Contact}/>
            </Switch>
          </div>
      </Router>
    </div>
  )
}

export default App;
