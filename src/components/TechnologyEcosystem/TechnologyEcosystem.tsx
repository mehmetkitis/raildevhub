import type { FC } from 'react';
import './TechnologyEcosystem.css';
import { useLanguage } from '../../context/LanguageContext';

interface TechStack {
  title: string;
  items: string[];
}

const stacksEN: TechStack[] = [
  {
    title: 'Artificial Intelligence & Data Science',
    items: [
      'Large Language Models (LLM)',
      'Predictive Analytics',
      'Autonomous Decision Engines',
      'Computer Vision Systems'
    ]
  },
  {
    title: 'Software & Cloud Technologies',
    items: [
      'Microservices Architecture',
      'Cloud-Native Distributed Systems',
      'Modern Web Frameworks',
      'Container Orchestration (Docker / Kubernetes)'
    ]
  }
];

const stacksTR: TechStack[] = [
  {
    title: 'Yapay Zekâ ve Veri Bilimi',
    items: [
      'Büyük Dil Modelleri (LLM)',
      'Öngörüsel Analitik',
      'Otonom Karar Motorları',
      'Görsel Tanıma Sistemleri'
    ]
  },
  {
    title: 'Yazılım ve Bulut Teknolojileri',
    items: [
      'Mikroservis Mimarisi',
      'Bulut Tabanlı Dağıtık Sistemler',
      'Modern Web Framework’leri',
      'Konteyner Orkestrasyonu (Docker / Kubernetes)'
    ]
  }
];

const TechnologyEcosystem: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const techStacks = isTR ? stacksTR : stacksEN;
  return (
    <section className="tech-ecosystem">
      <div className="tech-ecosystem__content">
        <h2 className="tech-ecosystem__title">
          {isTR ? 'Yeniliği Güçlendiren Teknoloji Ekosistemimiz' : 'The Technology Ecosystem Powering Innovation'}
        </h2>
        <p className="tech-ecosystem__subtitle">
          {isTR
            ? 'En ileri yazılım ve yapay zekâ teknolojilerini harmanlayarak güçlü, ölçeklenebilir çözümler üretiyoruz.'
            : 'We combine state-of-the-art software and AI to build robust, scalable solutions.'}
        </p>

        <div className="tech-ecosystem__grid">
          {techStacks.map((stack, index) => (
            <div key={index} className="tech-box">
              <h3 className="tech-box__title">{stack.title}</h3>
              <ul className="tech-box__list">
                {stack.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="tech-box__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button className="tech-ecosystem__button">
          {isTR ? 'Tüm Teknolojileri Keşfet →' : 'Explore All Technologies →'}
        </button>
      </div>
    </section>
  );
};

export default TechnologyEcosystem;