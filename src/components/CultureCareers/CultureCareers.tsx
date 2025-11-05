import type { FC } from 'react';
import './CultureCareers.css';
import { useLanguage } from '../../context/LanguageContext';

const CultureCareers: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  return (
    <div className="culture-careers">
      <header className="cc-hero">
        <div className="cc-hero-inner">
          <h1>{isTR ? 'Raylı Sistemlerin Geleceğine Katılın: İnovasyon ve Fırsatlarla Kariyer' : 'Join the Future of Rail: Careers in Innovation & Opportunity'}</h1>
          <p className="lead">{isTR ? 'İnsanı merkeze alan teknoloji üretiyoruz. Büyüyün, işbirliği yapın ve etki yaratın.' : 'We build people-first technology. Grow, collaborate, and make impact.'}</p>
        </div>
      </header>

      <section className="cc-section values">
        <div className="container">
          <h2>{isTR ? 'Bizi Biz Yapan Değerler' : 'Values That Define Us'}</h2>
          <p className="subtitle">{isTR ? 'Kültürümüz, inovasyonumuzun arkasındaki motordur.' : 'Our culture is the engine behind our innovation.'}</p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>{isTR ? 'İnovasyon' : 'Innovation'}</h3>
              <p>{isTR ? 'Çığır açan çözümler sunmak için sürekli öğrenme ve sınırları zorlama.' : 'Continuous learning and pushing boundaries to deliver breakthrough solutions.'}</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>{isTR ? 'İşbirliği' : 'Collaboration'}</h3>
              <p>{isTR ? 'Sonuçları hızlandıran ekip öncelikli yaklaşım ve açık iletişim.' : 'Team-first approach and open communication that accelerates outcomes.'}</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🌍</div>
              <h3>{isTR ? 'Etki' : 'Impact'}</h3>
              <p>{isTR ? 'Raylı sistemlere ve yolculara ölçülebilir faydalar sağlayan çalışmalar.' : 'Work that delivers measurable benefits to rail systems and passengers alike.'}</p>
            </div>

            <div className="value-card">
              <div className="value-icon">🎓</div>
              <h3>{isTR ? 'Gelişim' : 'Growth'}</h3>
              <p>{isTR ? 'İnsanlara yatırım yapıyoruz: mentorluk, eğitim bütçeleri ve kariyer yolları.' : 'We invest in people: mentorship, training budgets, and career paths.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cc-section perks">
        <div className="container">
          <h2>{isTR ? 'Çalışanlarımıza Sunduklarımız' : 'What We Offer Our People'}</h2>
          <p className="subtitle">{isTR ? 'Gelişmenize yardımcı olacak şekilde tasarlanmış avantajlar.' : 'Benefits designed to help you flourish.'}</p>

          <div className="perks-grid">
            <div className="perk-card">
              <div className="perk-icon">🕒</div>
              <h4>{isTR ? 'Esnek Çalışma' : 'Flexible Work'}</h4>
              <p>{isTR ? 'İş-yaşam dengesini destekleyen hibrit ve esnek çalışma programları.' : 'Hybrid and flexible schedules to support work-life balance.'}</p>
            </div>

            <div className="perk-card">
              <div className="perk-icon">📚</div>
              <h4>{isTR ? 'Eğitim Bütçeleri' : 'Learning Budgets'}</h4>
              <p>{isTR ? 'Kişisel gelişim ve özel eğitim ödeneği.' : 'Personal development and dedicated training allowance.'}</p>
            </div>

            <div className="perk-card">
              <div className="perk-icon">💚</div>
              <h4>{isTR ? 'Sağlık ve Yan Haklar' : 'Health & Benefits'}</h4>
              <p>{isTR ? 'Özel sağlık sigortası ve rekabetçi yan haklar.' : 'Private health coverage and competitive complementary benefits.'}</p>
            </div>

            <div className="perk-card">
              <div className="perk-icon">🪑</div>
              <h4>{isTR ? 'Modern Çalışma Alanı' : 'Modern Workspace'}</h4>
              <p>{isTR ? 'Başarı için ihtiyacınız olan araçlarla ergonomik, işbirliğine dayalı alanlar.' : 'Ergonomic, collaborative spaces with the tools you need to succeed.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cc-section openings">
        <div className="container">
          <h2>{isTR ? 'Açık Pozisyonlarımızı Keşfet' : 'Explore Our Open Positions'}</h2>
          <p className="subtitle">{isTR ? 'Rayın dijital omurgasını inşa eden mühendisler, veri bilimcileri ve operatörlerden oluşan ekibe katılın.' : 'Join a team of engineers, data scientists, and operators building the digital backbone of rail.'}</p>

          <div className="openings-list">
            <div className="opening-item">
              <div className="role">Senior Machine Learning Engineer</div>
              <div className="meta">Istanbul · Full-time · Remote-friendly</div>
            </div>

            <div className="opening-item">
              <div className="role">Backend Engineer (Java / Spring Boot)</div>
              <div className="meta">Istanbul · Full-time</div>
            </div>

            <div className="opening-item">
              <div className="role">Frontend Engineer (React / TypeScript)</div>
              <div className="meta">Istanbul · Full-time · Hybrid</div>
            </div>
          </div>

          <div className="cta-row">
            <button className="apply-btn">{isTR ? 'Tüm İlanları Gör' : 'View All Openings'}</button>
            <button className="apply-btn outline">{isTR ? 'Hemen Başvur' : 'Apply Now'}</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CultureCareers;