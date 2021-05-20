import Navbar from "./components/navbar/navbar"
import Intro from "./components/intro/intro"
import Works from "./components/works/works"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"
import './app.scss'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
