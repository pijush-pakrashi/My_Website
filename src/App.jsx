import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] min-h-screen relative overflow-hidden flex flex-col">
        <Preloader />
        <Navbar />
        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Skills />
                <Experience />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
