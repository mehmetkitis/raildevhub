import type { FC } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { useLanguage } from '../../context/LanguageContext';

interface FooterLink {
  text: string;
  url: string;
}

interface TechStack {
  name: string;
}

const quickLinksEN: FooterLink[] = [
  { text: 'Home', url: '/' },
  { text: 'About', url: '/about' },
  { text: 'Expertise', url: '/expertise' },
  { text: 'Projects', url: '/projects' },
  { text: 'Blog', url: '/blog' }
];

const quickLinksTR: FooterLink[] = [
  { text: 'Ana Sayfa', url: '/' },
  { text: 'Hakkımızda', url: '/about' },
  { text: 'Uzmanlık', url: '/expertise' },
  { text: 'Projeler', url: '/projects' },
  { text: 'Blog', url: '/blog' }
];

const techStack: TechStack[] = [
  { name: "AI & Machine Learning" },
  { name: "Java & Spring Boot" },
  { name: "React & Modern Web" },
  { name: "Kubernetes & DevOps" }
];

const Footer: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const quickLinks = isTR ? quickLinksTR : quickLinksEN;
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column brand">
          <h2>RailDevHub</h2>
          <p>
            {isTR
              ? 'Yapay Zekâ, Makine Öğrenimi ve Raylı Sistem uzmanlığını birleştiren 15 kişilik ekip. Güvenlik, Performans ve Kalite odaklı.'
              : 'A team of 15 experts combining expertise in AI, Machine Learning, and Railway Systems. Focused on Security, Performance, and Quality.'}
          </p>
        </div>

        <div className="footer-column">
          <h3>{isTR ? 'Hızlı Bağlantılar' : 'Quick Links'}</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h3>{isTR ? 'Teknoloji Mimarisi' : 'Technology Architecture'}</h3>
          <ul>
            {techStack.map((tech, index) => (
              <li key={index}>{tech.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RailDevHub. {isTR ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>

        <div className="social-links">
          <a href="https://github.com/raildevhub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/company/raildevhub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/raildevhub" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;