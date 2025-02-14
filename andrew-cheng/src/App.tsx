import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <Router>
      <div className="min-h-screen px-8 py-12 max-w-3xl mx-auto">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Analytics />
        </main>
      </div>
    </Router>
  );
}

export default App;