import './Statistics.css';
import { useLanguage } from '../../context/LanguageContext';

const Statistics = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-cards">
          <div className="stat-card" data-aos="fade-up" data-aos-delay="0">
            <div className="stat-number">15+</div>
            <div className="stat-label">{isTR ? 'Uzman Ekip Üyesi' : 'Expert Team Members'}</div>
            <div className="card-glow"></div>
          </div>
          
          <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
            <div className="stat-number">10+</div>
            <div className="stat-label">{isTR ? 'Teknoloji' : 'Technologies'}</div>
            <div className="card-glow"></div>
          </div>
          
          <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
            <div className="stat-number">5</div>
            <div className="stat-label">{isTR ? 'Ana Platform' : 'Major Platforms'}</div>
            <div className="card-glow"></div>
          </div>
        </div>
        
        <a href="#stories" className="stories-link" data-aos="fade-up" data-aos-delay="300">
          {isTR ? 'Dönüşüm Hikayelerimizi Okuyun' : 'Read Our Transformation Stories'}
          <span className="arrow">→</span>
        </a>
      </div>
      
      {/* Dekoratif arka plan elementleri */}
      <div className="decorative-lines">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="line"></div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;