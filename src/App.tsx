import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import ExpertisePage from './components/ExpertisePage/ExpertisePage';
import Footer from './components/Footer/Footer';
import CultureCareers from './components/CultureCareers/CultureCareers';
import './App.css';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/careers" element={<CultureCareers />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
