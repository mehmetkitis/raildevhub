import type { FC } from 'react';
import './TransformationStories.css';
import { useLanguage } from '../../context/LanguageContext';

interface Story {
  title: string;
  description: string;
  tag: string;
  color: 'blue' | 'red';
}

const storiesEN: Story[] = [
  {
    title: 'Data-Empowered Cities',
    description: 'AI-driven analysis of urban transit networks reduced congestion by 30%.',
    tag: 'Smart Cities',
    color: 'blue'
  },
  {
    title: 'Autonomous Signaling Network',
    description: 'A real-time data platform that optimizes train safety and scheduling with autonomous control.',
    tag: 'Data Analytics',
    color: 'red'
  }
];

const storiesTR: Story[] = [
  {
    title: 'Veriyle Güçlenen Şehirler',
    description: 'Şehir içi ulaşım ağlarını yapay zekâ ile analiz eden sistemler sayesinde trafik yoğunluğu %30 oranında azaldı.',
    tag: 'Akıllı Şehirler',
    color: 'blue'
  },
  {
    title: 'Otonom Sinyalizasyon Ağı',
    description: 'Gerçek zamanlı veri analiziyle tren güvenliğini ve zamanlamayı optimize eden otonom kontrol ağı.',
    tag: 'Veri Analitiği',
    color: 'red'
  }
];

const TransformationStories: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const stories = isTR ? storiesTR : storiesEN;
  return (
    <section className="transformation">
      <div className="transformation__content">
        <h2 className="transformation__title">
          {isTR ? 'İnovasyondan İlham Alan Dönüşüm Hikayeleri' : 'Transformation Stories Inspired by Innovation'}
        </h2>
        <p className="transformation__subtitle">
          {isTR ? 'Her proje, bir fikrin gerçeğe dönüşmesinin hikayesidir.' : 'Every project tells the story of an idea becoming reality.'}
        </p>

        <div className="transformation__grid">
          {stories.map((story, index) => (
            <div key={index} className={`story-card story-card--${story.color}`}>
              <span className="story-card__tag">{story.tag}</span>
              <h3 className="story-card__title">{story.title}</h3>
              <p className="story-card__description">{story.description}</p>
              <a href="#" className="story-card__link">
                {story.color === 'blue' ? (isTR ? 'Hikayeyi Oku →' : 'Read the Story →') : (isTR ? 'Detayları Gör →' : 'See Details →')}
              </a>
            </div>
          ))}
        </div>

        <button className="transformation__button">
          {isTR ? 'Tüm Hikayeleri Gör →' : 'View All Stories →'}
        </button>
      </div>
    </section>
  );
};

export default TransformationStories;