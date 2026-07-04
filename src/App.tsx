import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/education" element={<Resume />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="/portfolio" element={<Navigate to="/projects" replace />} />
            <Route path="/resume" element={<Navigate to="/education" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
