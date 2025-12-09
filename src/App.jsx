import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import TorontoCupcakes from './pages/projects/TorontoCupcakes'
import DesignSprint from './pages/projects/DesignSprint'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/interaction-design-rules" element={<TorontoCupcakes />} />
        <Route path="/projects/design-sprint" element={<DesignSprint />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
