import type { FC } from 'react';
import './Expertise.css';
import { useI18n } from '../../i18n/i18n';

interface DomainCard {
  icon: string;
  title: string;
  description: string;
}

const useDomainCards = (): DomainCard[] => {
  const { t } = useI18n();
  return t('expertise.domains') as unknown as DomainCard[];
};

const Expertise: FC = () => {
  const { t } = useI18n();
  const domainCards = useDomainCards();
  return (
    <section className="expertise">
      <div className="section-header">
        <h2>
          <span className="icon">🌐</span>
          {t('expertise.header.title')}
        </h2>
        <p className="subtitle">
          {t('expertise.header.subtitle')}
        </p>
      </div>

      <div className="domain-cards">
        {domainCards.map((card, index) => (
          <div key={index} className="domain-card">
            <span className="domain-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="standards-banner">
        <h3>{t('expertise.standards.title')}</h3>
        <p>{t('expertise.standards.text')}</p>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>
          <span className="icon">💡</span>
          {t('expertise.cta.title')}
        </h2>
        <p>
          {t('expertise.cta.text')}
        </p>
        <div className="cta-buttons">
          <button className="cta-button primary">{t('expertise.cta.primary')}</button>
          <button className="cta-button secondary">{t('expertise.cta.secondary')}</button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;