import Navbar from "./components/navbar/navbar"
import Intro from "./components/intro/intro"
import Works from "./components/works/works"
import Contact from "./components/contact/contact"
import './app.scss'
import Skills from "./components/skills/skills"
import About from "./components/about/about"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="section">
        <Intro />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
