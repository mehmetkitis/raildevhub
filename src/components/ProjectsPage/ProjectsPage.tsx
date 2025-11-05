import type { FC } from 'react';
import './ProjectsPage.css';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectItem {
  name: string;
  topic: string;
  achievements: string[];
  technologies: string[];
  visualLabel: string;
}

const projectsEN: ProjectItem[] = [
  {
    name: 'RailSense - Intelligent Safety System',
    topic:
      'AI-powered vibration analytics platform that reduces accident risk in heavy freight trains.',
    achievements: [
      'Real-time Fault Detection',
      'Pre-Event Alerts',
      'Autonomous Route Adjustment Support'
    ],
    technologies: ['AI/ML', 'Sensor Fusion', 'Edge Computing', 'Python'],
    visualLabel: 'Vibration Analytics Panel'
  },
  {
    name: 'MetroFlow - Passenger Flow Management',
    topic:
      'Mobile app integration that optimizes passenger flow and reduces waiting times on metropolitan metro lines.',
    achievements: [
      'Real-time Density Map',
      'Estimated Arrival Times',
      'Mobile Ticketing Integration'
    ],
    technologies: ['React Native', 'PostgreSQL', 'Kubernetes', 'NodeJS'],
    visualLabel: 'Passenger Density Dashboard'
  },
  {
    name: 'EcoTrack - Energy Efficiency Optimization',
    topic:
      'Dynamic driving advisory system that minimizes fuel consumption using speed, grade, and load data.',
    achievements: ['15% Fuel Savings', 'Driver Performance Scorecard', 'Carbon Footprint Reporting'],
    technologies: ['Data Analytics', 'Cloud Computing (AWS/Azure)', 'C#', 'Scala'],
    visualLabel: 'Energy Optimization Console'
  },
  {
    name: 'AssetGuard - Asset Tracking Solution',
    topic:
      'Central management panel integrating maintenance tracking of railway infrastructure with satellite imagery and drone data.',
    achievements: ['GPS/GNSS Integration', '3D Asset Modeling', 'Automated Maintenance Record Creation'],
    technologies: ['Microservices', 'GIS', 'MongoDB', 'Java Spring'],
    visualLabel: 'Asset Mapping & 3D View'
  },
  {
    name: 'CrossLink - International Logistics Network',
    topic:
      'B2B platform that digitizes customs processes and enables automated document verification for cross-border rail freight.',
    achievements: ['Fast Customs Clearance (under 48h)', 'Secure Data Exchange (Blockchain)', 'End-to-End Tracking'],
    technologies: ['Blockchain', 'Rest API', 'Swagger', 'Kafka'],
    visualLabel: 'Logistics & Customs Flow Board'
  }
];

const projectsTR: ProjectItem[] = [
  {
    name: 'RailSense - Akıllı Güvenlik Sistemi',
    topic:
      'Ağır yük trenlerinde kaza riskini azaltan Yapay Zeka destekli titreşim analizi platformu.',
    achievements: [
      'Anlık Hata Tespiti',
      'Olay Öncesi Uyarılar',
      'Otonom Rota Değişikliği Desteği'
    ],
    technologies: ['AI/ML', 'Sensor Fusion', 'Edge Computing', 'Python'],
    visualLabel: 'Titreşim Analitiği Paneli'
  },
  {
    name: 'MetroFlow - Yolcu Yoğunluk Yönetimi',
    topic:
      'Büyük şehir metro hatlarında yolcu akışını optimize eden ve bekleme sürelerini azaltan mobil uygulama entegrasyonu.',
    achievements: [
      'Gerçek Zamanlı Yoğunluk Haritası',
      'Tahmini Varış Süreleri',
      'Mobil Bilet Entegrasyonu'
    ],
    technologies: ['React Native', 'PostgreSQL', 'Kubernetes', 'NodeJS'],
    visualLabel: 'Yolcu Yoğunluk Gösterge Paneli'
  },
  {
    name: 'EcoTrack - Enerji Verimliliği Optimizasyonu',
    topic:
      'Trenlerin hız, eğim ve yük bilgilerini kullanarak yakıt tüketimini minimuma indiren dinamik sürüş tavsiye sistemi.',
    achievements: ['%15 Yakıt Tasarrufu', 'Sürücü Performans Karnesi', 'Karbon Ayak İzi Raporlama'],
    technologies: ['Data Analytics', 'Cloud Computing (AWS/Azure)', 'C#', 'Scala'],
    visualLabel: 'Enerji Optimizasyon Konsolu'
  },
  {
    name: 'AssetGuard - Varlık Takip Çözümü',
    topic:
      'Demiryolu altyapısındaki bakım takibini uydu görüntüleri ve drone verileriyle entegre eden merkezi yönetim paneli.',
    achievements: ['GPS/GNSS Entegrasyonu', '3D Varlık Modelleme', 'Otomatik Bakım Kaydı Oluşturma'],
    technologies: ['Microservices', 'GIS', 'MongoDB', 'Java Spring'],
    visualLabel: 'Varlık Haritalama ve 3D Görüntü'
  },
  {
    name: 'CrossLink - Uluslararası Lojistik Ağı',
    topic:
      'Sınır ötesi demiryolu taşımacılığı için gümrük süreçlerini dijitalleştiren ve otomatik belge doğrulama sağlayan B2B platformu.',
    achievements: ['Hızlı Gümrükleme (48 Saat Altı)', 'Güvenli Veri Alışverişi (Blockchain)', 'Uçtan Uca Takip'],
    technologies: ['Blockchain', 'Rest API', 'Swagger', 'Kafka'],
    visualLabel: 'Lojistik ve Gümrük Akış Panosu'
  }
];

const ProjectsPage: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const projects = isTR ? projectsTR : projectsEN;
  return (
    <section className="projects">
      <div className="projects__header">
        <h1 className="projects__title">{isTR ? 'Projelerimiz' : 'Our Projects'}</h1>
        <p className="projects__subtitle">
          {isTR
            ? 'İnovasyon odaklı, uçtan uca çözümlerimizle raylı sistemlerde güvenlik, verimlilik ve sürdürülebilirliği artırıyoruz.'
            : 'With innovation-focused, end-to-end solutions, we enhance safety, efficiency, and sustainability in rail systems.'}
        </p>
      </div>

      <div className="projects__list">
        {projects.map((p, i) => (
          <article key={i} className="project-block">
            <div className="project-block__content">
              <div className="project-block__text">
                <h2 className="project-block__name">{p.name}</h2>
                <p className="project-block__topic">{p.topic}</p>
                <div className="project-block__details">
                  <div className="project-block__achievements">
                    <h3>{isTR ? 'Temel Başarımlar' : 'Key Achievements'}</h3>
                    <ul>
                      {p.achievements.map((a, ai) => (
                        <li key={ai}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-block__tech">
                    <h3>{isTR ? 'Temel Teknolojiler' : 'Core Technologies'}</h3>
                    <div className="tech-tags">
                      {p.technologies.map((t, ti) => (
                        <span key={ti} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-block__visual" aria-label={p.visualLabel}>
                <div className="visual-frame">
                  <div className="visual-header">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                    <span className="visual-title">{p.visualLabel}</span>
                  </div>
                  <div className="visual-body">
                    <div className="chart bar" />
                    <div className="chart line" />
                    <div className="chart pie" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="projects-impact">
        <div className="impact__card">
          <h2 className="impact__title">{isTR ? 'Proje Etkisi' : 'Project Impact'}</h2>
          <div className="impact__stats">
            <div className="impact__stat">
              <span className="impact__value">5M+</span>
              <span className="impact__label">{isTR ? 'Yolcu Erişimi' : 'Passengers Reached'}</span>
            </div>
            <div className="impact__stat">
              <span className="impact__value">{isTR ? '%20' : '20%'}</span>
              <span className="impact__label">{isTR ? 'Maliyet Azaltma' : 'Cost Reduction'}</span>
            </div>
            <div className="impact__stat">
              <span className="impact__value">{isTR ? '%30' : '30%'}</span>
              <span className="impact__label">{isTR ? 'Enerji Verimliliği' : 'Energy Efficiency'}</span>
            </div>
            <div className="impact__stat">
              <span className="impact__value">12</span>
              <span className="impact__label">{isTR ? 'Ülkede Operasyon' : 'Countries in Operation'}</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProjectsPage;
