import type { FC } from 'react';
import './InnovationSection.css';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCard {
  icon: string;
  status: string;
  statusColor: string;
  title: string;
  description: string;
  tags: string[];
}

const projectsEN: ProjectCard[] = [
  {
    icon: '🔬',
    status: 'Pilot',
    statusColor: '#00ff88',
    title: 'Smart Line Sentinels',
    description: 'A preventive system that monitors temperature and micro-structure changes along the line using embedded IoT sensors.',
    tags: ['IoT', 'Machine Learning', 'Edge Computing']
  },
  {
    icon: '🤖',
    status: 'Development',
    statusColor: '#ff6b6b',
    title: 'Virtual Passenger Assistant',
    description: 'A multilingual AI assistant that helps passengers with planning, information and delay predictions.',
    tags: ['LLM', 'NLP', 'Voice AI']
  },
  {
    icon: '🔗',
    status: 'Research',
    statusColor: '#ffd93d',
    title: 'Blockchain Security Ledger',
    description: 'A system that secures maintenance and safety history with immutable blockchain records.',
    tags: ['Blockchain', 'Smart Contracts', 'Audit Trail']
  },
  {
    icon: '🌱',
    status: 'Pilot',
    statusColor: '#00ff88',
    title: 'Green Route Engine',
    description: 'An eco-friendly solution that dynamically optimizes train routes to reduce energy consumption.',
    tags: ['Optimization', 'Sustainability', 'Green Tech']
  },
  {
    icon: '👁️',
    status: 'Development',
    statusColor: '#ff6b6b',
    title: 'Visual Safety Analytics',
    description: 'AI-powered cameras analyze tracks and rolling stock to detect hazards before they occur.',
    tags: ['Computer Vision', 'Real-Time', 'Safety']
  },
  {
    icon: '🌐',
    status: 'Research',
    statusColor: '#ffd93d',
    title: 'Digital Twin Simulator',
    description: 'Creates virtual replicas of rail systems to test scenarios and run safe simulations.',
    tags: ['Simulation', '3D Modeling', 'Testing']
  }
];

const projectsTR: ProjectCard[] = [
  {
    icon: '🔬',
    status: 'Pilot',
    statusColor: '#00ff88',
    title: 'Akıllı Hat Gözcüleri',
    description: 'Gömülü IoT sensörleri kullanarak hat boyunca sıcaklık ve mikro-yapı değişimlerini izleyen önleyici sistem.',
    tags: ['IoT', 'Makine Öğrenimi', 'Uç Hesaplama']
  },
  {
    icon: '🤖',
    status: 'Geliştirme',
    statusColor: '#ff6b6b',
    title: 'Sanal Yolcu Asistanı',
    description: 'Yolculara planlama, bilgilendirme ve gecikme tahminlerinde yardımcı olan çok dilli yapay zeka asistanı.',
    tags: ['LLM', 'NLP', 'Sesli Yapay Zeka']
  },
  {
    icon: '🔗',
    status: 'Araştırma',
    statusColor: '#ffd93d',
    title: 'Blockchain Güvenlik Defteri',
    description: 'Bakım ve güvenlik geçmişini değiştirilemez blockchain kayıtlarıyla güvence altına alan sistem.',
    tags: ['Blockchain', 'Akıllı Sözleşmeler', 'Denetim İzi']
  },
  {
    icon: '🌱',
    status: 'Pilot',
    statusColor: '#00ff88',
    title: 'Yeşil Rota Motoru',
    description: 'Enerji tüketimini azaltmak için tren rotalarını dinamik olarak optimize eden çevre dostu çözüm.',
    tags: ['Optimizasyon', 'Sürdürülebilirlik', 'Yeşil Teknoloji']
  },
  {
    icon: '👁️',
    status: 'Geliştirme',
    statusColor: '#ff6b6b',
    title: 'Görsel Güvenlik Analitiği',
    description: 'Tehlikeleri oluşmadan önce tespit etmek için rayları ve vagonları analiz eden yapay zeka destekli kameralar.',
    tags: ['Bilgisayarlı Görü', 'Gerçek Zamanlı', 'Güvenlik']
  },
  {
    icon: '🌐',
    status: 'Araştırma',
    statusColor: '#ffd93d',
    title: 'Dijital İkiz Simülatörü',
    description: 'Senaryoları test etmek ve güvenli simülasyonlar yapmak için raylı sistemlerin sanal replikalarını oluşturur.',
    tags: ['Simülasyon', '3D Modelleme', 'Test']
  }
];

const InnovationSection: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const projects = isTR ? projectsTR : projectsEN;
  
  return (
    <section className="innovation-section">
      <div className="innovation-section__header">
        <span className="innovation-section__label">🔬 {isTR ? 'İnovasyon Merkezi' : 'Innovation Center'}</span>
        <h2 className="innovation-section__title">{isTR ? 'Geleceği Kodluyoruz' : 'Coding the Future'}</h2>
        <p className="innovation-section__subtitle">
          {isTR 
            ? 'Bugünün sınırlarını zorlamak için yarının teknolojilerini bugün test ediyoruz.'
            : 'We\'re testing tomorrow\'s technologies today to push the boundaries of the present.'}
        </p>
      </div>

      <div className="innovation-section__projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card__header">
              <span className="project-card__icon">{project.icon}</span>
              <span 
                className="project-card__status"
                style={{ backgroundColor: project.statusColor + '20', color: project.statusColor }}
              >
                {project.status}
              </span>
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="innovation-section__footer">
        <div className="info-box">
          <h2 className="info-box__title">{isTR ? 'Deneyler Asla Bitmez' : 'Experimentation Never Ends'}</h2>
          <p className="info-box__text">
            {isTR 
              ? 'Her gün yeni bir fikir test ediyoruz. Bazıları başarısız oluyor, bazıları geleceği değiştiriyor.'
              : 'Every day we test a new idea. Some fail, some change the future.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;