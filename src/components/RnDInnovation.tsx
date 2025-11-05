import React from 'react';
import type { FC } from 'react';
import './RnDInnovation.css';

interface ProjectCard {
  icon: string;
  status: string;
  statusColor: string;
  title: string;
  description: string;
  tags: string[];
}

const projects: ProjectCard[] = [
  {
    icon: '🔬',
    status: 'Pilot',
    statusColor: '#00ff88',
    title: 'Akıllı Hat Gözcüleri',
    description: 'Gömülü IoT sensörleriyle hat boyunca sıcaklık ve mikroyapı değişimlerini izleyen önleyici sistem.',
    tags: ['IoT', 'Makine Öğrenimi', 'Edge Computing']
  },
  {
    icon: '🤖',
    status: 'Geliştirme',
    statusColor: '#ff6b6b',
    title: 'Sanal Yolcu Asistanı',
    description: 'Çok dilli yapay zekâ modeliyle yolculara planlama, bilgilendirme ve gecikme tahmini desteği sunar.',
    tags: ['LLM', 'NLP', 'Voice AI']
  },
  {
    icon: '🔗',
    status: 'Araştırma',
    statusColor: '#ffd93d',
    title: 'Blokzincir Güvenlik Arşivi',
    description: 'Bakım ve güvenlik geçmişini değiştirilemez blokzincir kayıtlarıyla güvence altına alan sistem.',
    tags: ['Blockchain', 'Smart Contracts', 'Audit Trail']
  },
  {
    icon: '🌱',
    status: 'Pilot',
    statusColor: '#00ff88',
    title: 'Yeşil Rota Motoru',
    description: 'Enerji tüketimini azaltmak için tren rotalarını dinamik biçimde optimize eden çevre dostu çözüm.',
    tags: ['Optimization', 'Sustainability', 'Green Tech']
  },
  {
    icon: '👁️',
    status: 'Geliştirme',
    statusColor: '#ff6b6b',
    title: 'Görsel Güvenlik Analitiği',
    description: 'Yapay zekâ destekli kameralarla ray hatlarını ve araçları analiz eden, tehlikeleri önceden algılayan sistem.',
    tags: ['Computer Vision', 'Real-Time', 'Safety']
  },
  {
    icon: '🌐',
    status: 'Araştırma',
    statusColor: '#ffd93d',
    title: 'Dijital Evren Simülatörü',
    description: 'Raylı sistemlerin sanal kopyasını oluşturarak olası senaryoları test etmeyi ve güvenli simülasyonlar yapmayı sağlar.',
    tags: ['Simulation', '3D Modeling', 'Testing']
  }
];

const RnDInnovation: FC = () => {
  return (
    <div className="rnd-innovation">
      <div className="rnd-innovation__header">
        <span className="rnd-innovation__label">🔬 İnovasyon Merkezi</span>
        <h1 className="rnd-innovation__title">Geleceği Kodluyoruz</h1>
        <p className="rnd-innovation__subtitle">
          Bugünün sınırlarını aşmak için yarının teknolojilerini bugünden deniyoruz.
        </p>
      </div>

      <div className="rnd-innovation__projects">
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

      <div className="rnd-innovation__footer">
        <div className="info-box">
          <h2 className="info-box__title">Deney Asla Bitmez</h2>
          <p className="info-box__text">
            Her gün yeni bir fikir test ediyoruz. Kimi başarısız olur, kimi geleceği değiştirir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RnDInnovation;