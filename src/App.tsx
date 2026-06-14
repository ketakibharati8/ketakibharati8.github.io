import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MagicalCursor } from './components/MagicalCursor';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Journey from './pages/Journey';
import Certifications from './pages/Certifications';
import './index.css';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <MagicalCursor enabled={true} />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
