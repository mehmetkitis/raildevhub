import './Statistics.css';

const Statistics = () => {
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        <div className="statistics-cards">
          <div className="stat-card" data-aos="fade-up" data-aos-delay="0">
            <div className="stat-number">15+</div>
            <div className="stat-label">Expert Team Members</div>
            <div className="card-glow"></div>
          </div>
          
          <div className="stat-card" data-aos="fade-up" data-aos-delay="100">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies</div>
            <div className="card-glow"></div>
          </div>
          
          <div className="stat-card" data-aos="fade-up" data-aos-delay="200">
            <div className="stat-number">2</div>
            <div className="stat-label">Major Platforms</div>
            <div className="card-glow"></div>
          </div>
        </div>
        
        <a href="#stories" className="stories-link" data-aos="fade-up" data-aos-delay="300">
          Read Our Transformation Stories
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