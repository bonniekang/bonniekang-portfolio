import Navbar from "./components/navbar/navbar"
import Intro from "./components/intro/intro"
import Works from "./components/works/works"
import Contact from "./components/contact/contact"
import './app.scss'
import Skills from "./components/skills/skills"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="section">
        <Intro />
        <Skills />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
