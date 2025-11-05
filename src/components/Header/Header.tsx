 
import { Link } from 'react-router-dom';
import './Header.css';
import { useLanguage } from '../../context/LanguageContext';
import { useState } from 'react';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="brand-name">RailDevHub</h1>
      </div>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="menu-bar" />
        <span className="menu-bar" />
        <span className="menu-bar" />
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <Link to="/">{language === 'tr' ? 'Ana Sayfa' : 'Home'}</Link>
        <Link to="/about">{language === 'tr' ? 'Hakkımızda' : 'About'}</Link>
        <Link to="/expertise">{language === 'tr' ? 'Uzmanlık' : 'Expertise'}</Link>
        <Link to="/projects">{language === 'tr' ? 'Projeler' : 'Projects'}</Link>
        <Link to="/careers">{language === 'tr' ? 'Kariyer' : 'Careers'}</Link>
      </nav>

      <div className="header-controls">
        <div className="lang-switch" role="group" aria-label="Language switcher">
          <button
            type="button"
            className={`lang-segment ${language === 'tr' ? 'active' : ''}`}
            aria-pressed={language === 'tr'}
            onClick={() => setLanguage('tr')}
          >
            TR
          </button>
          <button
            type="button"
            className={`lang-segment ${language === 'en' ? 'active' : ''}`}
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;