 
import { Link } from 'react-router-dom';
import './Header.css';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="brand-name">RailDevHub</h1>
      </div>
      
      <nav className="nav-links">
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