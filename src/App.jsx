import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import GraphicDesigning from './pages/GraphicDesigning';
import WebProjects from './pages/WebProjects';
import ProjectDetails from './pages/ProjectDetails';
import Photography from './pages/Photography';
import Contact from './pages/Contact';
import AdminInbox from './pages/AdminInbox';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-ink dark:text-paper">
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/projects/web-projects" element={<WebProjects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-inbox" element={<AdminInbox />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
