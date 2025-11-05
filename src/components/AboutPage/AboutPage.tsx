import type { FC } from 'react';
import './AboutPage.css';
import WhatWeEngineer from '../WhatWeEngineer/WhatWeEngineer';
import ValuesRoadmap from '../ValuesRoadmap/ValuesRoadmap';
import Expertise from '../Expertise/Expertise';
import { useI18n } from '../../i18n/i18n';

const AboutPage: FC = () => {
  const { t } = useI18n();
  const missionCards = t('about.mission.cards') as Array<{ icon: string; title: string; description: string }>;
  const capabilities = t('about.capabilities') as Array<{ icon: string; title: string; focus: string; description: string }>;
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{t('about.hero.title')}</h1>
          <p className="hero-slogan">{t('about.hero.slogan')}</p>
          <p className="hero-subtext">{t('about.hero.subtext')}</p>
          <button className="cta-button">{t('about.hero.cta')}</button>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Mission Banner */}
      <div className="mission-banner">
        {t('about.mission.banner')}
      </div>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="section-header">
          <h2>{t('about.story.title')}</h2>
          <p className="intro-text">{t('about.story.intro')}</p>
        </div>

        <div className="mission-cards">
          {missionCards.map((card, index) => (
            <div key={index} className="mission-card">
              <span className="card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="core-mission">
        <h2>{t('about.core.title')}</h2>
        <p className="mission-text">{t('about.core.text')}</p>

        <blockquote className="highlight-box">{t('about.core.diff')}</blockquote>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities">
        <div className="capabilities-grid">
          {capabilities.map((cap, index) => (
            <div key={index} className="capability-card">
              <span className="card-icon">{cap.icon}</span>
              <h3>{cap.title}</h3>
              <p className="focus">{cap.focus}</p>
              <p className="description">{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Engineer Section */}
      <WhatWeEngineer />

      {/* Values and Roadmap Section */}
      <ValuesRoadmap />

      {/* Expertise Section */}
      <Expertise />
    </div>
  );
};

export default AboutPage;