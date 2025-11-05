import Statistics from '../Statistics/Statistics';
import CoreValues from '../CoreValues/CoreValues';
import InnovationSection from '../InnovationSection/InnovationSection';
import TechnologyEcosystem from '../TechnologyEcosystem/TechnologyEcosystem';
import TransformationStories from '../TransformationStories/TransformationStories';
import CallToAction from '../CallToAction/CallToAction';
import './LandingPage.css';
import { useLanguage } from '../../context/LanguageContext';

const LandingPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  return (
    <div className="landing-container">
      <section className="hero-section">
        {/* Animasyonlu arka plan katmanı */}
        <div className="animated-background">
          <div className="rail-lines">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="rail-line">
                <div className="data-flow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="landing-content">
          <div className="content-wrapper">
            <h1 className="main-title">
              {isTR ? 'Raylı Sistemlerin' : 'Redefining the Future of'}
              <span className="highlight">{isTR ? 'Geleceğini Yeniden Tanımlıyoruz' : 'Rail Systems'}</span>
            </h1>

            <h2 className="sub-title">
              {isTR
                ? 'Yapay Zeka, Nesnelerin İnterneti ve Yazılım Mühendisliğini birleştirerek milyonlarca yolculuğu daha akıllı, daha hızlı ve daha sürdürülebilir hale getiriyoruz.'
                : 'By combining AI, the Internet of Things, and Software Engineering, we make millions of journeys smarter, faster, and more sustainable.'}
            </h2>

            <p className="motto">
              {isTR
                ? '"Çelik kodla buluştuğunda, her yolculuk bir öncekinden öğrenir."'
                : '"When steel meets code, every journey learns from the last."'}
            </p>

            <div className="cta-buttons">
              <button className="btn btn-primary">
                <span className="btn-text">{isTR ? 'Teknolojimizi Keşfedin' : 'Explore Our Technology'}</span>
                <span className="btn-glow"></span>
              </button>
              <button className="btn btn-secondary">
                <span className="btn-text">{isTR ? 'Vizyonumuz' : 'Our Vision'}</span>
                <span className="btn-border-glow"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Dekoratif elementler */}
        <div className="decorative-elements">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="particle"></div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Core Values Section */}
      <CoreValues />

      {/* Innovation Section */}
      <InnovationSection />

      {/* Technology Ecosystem Section */}
      <TechnologyEcosystem />

      {/* Transformation Stories Section */}
      <TransformationStories />

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
};

export default LandingPage;