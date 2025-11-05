import './CoreValues.css';
import { useLanguage } from '../../context/LanguageContext';

const CoreValues = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const valuesEN = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L8 12V22C8 31.1 14.8 39.6 24 42C33.2 39.6 40 31.1 40 22V12L24 4ZM24 24H36C35.1 31.1 30.2 37.6 24 39.7V24H12V13.6L24 7.7V24Z" 
                fill="url(#securityGradient)"/>
          <defs>
            <linearGradient id="securityGradient" x1="8" y1="4" x2="40" y2="42" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA"/>
              <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Security First",
      description: "Advanced security measures protecting critical data and infrastructure."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24ZM15.2 24L21.6 30.4L32.8 19.2" 
                stroke="url(#performanceGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="performanceGradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA"/>
              <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "High Performance",
      description: "Optimized solutions designed to manage real-time, large-scale systems."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12L24 4L42 12M6 12L24 20M6 12V36L24 44M42 12L24 20M42 12V36L24 44M24 20V44" 
                stroke="url(#designGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="designGradient" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA"/>
              <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Modern Design",
      description: "Intuitive, user-friendly interfaces with contemporary design principles."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 16L24 24L8 16L24 8L40 16ZM40 16V32M8 16V32L24 40L40 32" 
                stroke="url(#qualityGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="qualityGradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA"/>
              <stop offset="1" stopColor="#3B82F6"/>
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Quality Products",
      description: "Production-ready solutions with rigorous testing and best practices."
    }
  ];

  const valuesTR = [
    {
      icon: valuesEN[0].icon,
      title: "Güvenlik Öncelikli",
      description: "Kritik veri ve altyapıyı koruyan gelişmiş güvenlik önlemleri."
    },
    {
      icon: valuesEN[1].icon,
      title: "Yüksek Performans",
      description: "Gerçek zamanlı, büyük ölçekli sistemleri yönetmek için optimize edilmiş çözümler."
    },
    {
      icon: valuesEN[2].icon,
      title: "Modern Tasarım",
      description: "Çağdaş tasarım ilkeleriyle sezgisel, kullanıcı dostu arayüzler."
    },
    {
      icon: valuesEN[3].icon,
      title: "Kaliteli Ürünler",
      description: "Titiz test ve en iyi uygulamalarla üretime hazır çözümler."
    }
  ];

  const values = isTR ? valuesTR : valuesEN;

  return (
    <section className="core-values">
      <div className="core-values-container">
        <h2 className="section-title">{isTR ? 'Temel Değerler' : 'Core Values'}</h2>
        <p className="section-subtitle">
          {isTR ? 'Mükemmelliğe ulaşmak için benimsediğimiz ilkeler.' : 'Principles we embrace to achieve excellence.'}
        </p>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="icon-wrapper">
                {value.icon}
                <div className="icon-glow"></div>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dekoratif arka plan elementleri */}
      <div className="decorative-bg">
        <div className="gradient-overlay"></div>
        {[...Array(20)].map((_, index) => (
          <div key={index} className="light-dot"></div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;