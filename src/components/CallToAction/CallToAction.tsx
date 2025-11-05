import type { FC } from 'react';
import './CallToAction.css';
import { useLanguage } from '../../context/LanguageContext';

const CallToAction: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  return (
    <section className="cta">
      <div className="cta__content">
        <div className="cta__box">
          <h2 className="cta__title">
            {isTR ? 'Raylı Sistemleri Geleceğe Taşımaya Hazır mısınız?' : 'Ready to Lead Rail Systems into the Future?'}
          </h2>
          <p className="cta__subtitle">
            {isTR ? 'Yenilikçi çözümlerimizle ulaşımın dönüşümüne öncülük ediyoruz.' : 'We spearhead the transformation of mobility with innovative solutions.'}
          </p>
          <button className="cta__button">
            {isTR ? 'Projelerimizi Keşfet →' : 'Explore Our Projects →'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;