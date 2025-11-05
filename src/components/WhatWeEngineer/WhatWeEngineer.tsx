import type { FC } from 'react';
import './WhatWeEngineer.css';
import { useLanguage } from '../../context/LanguageContext';

interface EngineeringCard {
  icon: string;
  title: string;
  color: string;
  content: string;
  items: string[];
}

const engineeringCardsEN: EngineeringCard[] = [
  {
    icon: "🌐",
    title: "Network Operations Hub",
    color: "#3B82F6", // blue
    content: "The heart of your transport system. RayNext and RayData are just the beginning. We're building the digital infrastructure that will carry Turkey's railways and beyond into the future.",
    items: [
      "Smart approval & certification modules",
      "Real-time operational BI dashboards",
      "Automated route optimization"
    ]
  },
  {
    icon: "📡",
    title: "Invisible Sentinels",
    color: "#EF4444", // red
    content: "Our network of thousands of sensors deployed on tracks, stations, and trains communicates in real-time with RailDevHub's artificial intelligence. Data flow from everywhere, every moment.",
    items: [
      "Rail integrity & wear analysis",
      "Micro-climate & environmental monitoring",
      "Train dynamics & telemetry"
    ]
  },
  {
    icon: "🧠",
    title: "Forecasting Engines",
    color: "#F97316", // orange
    content: "Our machine learning models predict issues long before they occur, optimize routes in milliseconds, and continuously learn from every journey.",
    items: [
      "Predictive Maintenance AI",
      "Dynamic demand & capacity modeling",
      "Anomaly detection & security protocols"
    ]
  }
];

const engineeringCardsTR: EngineeringCard[] = [
  {
    icon: "🌐",
    title: "Ağ Operasyon Merkezi",
    color: "#3B82F6", // blue
    content: "Ulaşım sisteminizin kalbi. RayNext ve RayData sadece başlangıç. Türkiye'nin demiryollarını ve ötesini geleceğe taşıyacak dijital altyapıyı inşa ediyoruz.",
    items: [
      "Akıllı onay ve sertifikasyon modülleri",
      "Gerçek zamanlı operasyonel İş Zekası panoları",
      "Otomatik rota optimizasyonu"
    ]
  },
  {
    icon: "📡",
    title: "Görünmez Gözcüler",
    color: "#EF4444", // red
    content: "Raylar, istasyonlar ve trenlere yerleştirilen binlerce sensörden oluşan ağımız, RailDevHub'ın yapay zekasıyla gerçek zamanlı iletişim kuruyor. Veri her yerden, her an akıyor.",
    items: [
      "Ray bütünlüğü ve aşınma analizi",
      "Mikro-iklim ve çevre izleme",
      "Tren dinamiği ve telemetri"
    ]
  },
  {
    icon: "🧠",
    title: "Tahmin Motorları",
    color: "#F97316", // orange
    content: "Makine öğrenimi modellerimiz sorunları oluşmadan çok önce tahmin ediyor, rotaları milisaniyeler içinde optimize ediyor ve her yolculuktan sürekli öğreniyor.",
    items: [
      "Öngörüsel Bakım Yapay Zekası",
      "Dinamik talep ve kapasite modelleme",
      "Anomali tespiti ve güvenlik protokolleri"
    ]
  }
];

const WhatWeEngineer: FC = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const engineeringCards = isTR ? engineeringCardsTR : engineeringCardsEN;
  
  return (
    <section className="what-we-engineer">
      <div className="section-header">
        <h2>
          <span className="icon">🛠️</span>
          {isTR ? 'Neler Geliştiriyoruz: Sınırları Zorluyoruz' : 'What We Engineer: Pushing Boundaries'}
        </h2>
        <p className="slogan">
          {isTR 
            ? 'Parmaklarımız kodda, aklımız gelecekte, kalbimiz raylarda.'
            : 'Our fingers in the code, our minds in the future, our hearts on the rails.'}
        </p>
      </div>

      <div className="engineering-cards">
        {engineeringCards.map((card, index) => (
          <div 
            key={index} 
            className="engineering-card"
            style={{ '--card-color': card.color } as React.CSSProperties}
          >
            <span className="card-icon" style={{ color: card.color }}>{card.icon}</span>
            <h3>{card.title}</h3>
            <p className="card-content">{card.content}</p>
            <ul className="card-items">
              {card.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="emphasis-banner">
        <div className="banner-content">
          <h3>{isTR ? 'Verinin Gizli Gücü: Altyapının Kalbi' : 'The Hidden Power of Data: Heart of the Infrastructure'}</h3>
          <p>
            {isTR
              ? 'Her panonun arkasında bir mikroservis senfonisi yatıyor. Her tahminin arkasında milyonlarca veri noktası üzerinde eğitilmiş sinir ağları var. Her güvenli yolculuğun arkasında, yolcuların güvenle varış noktalarına ulaşmasını sağlamak için 7/24/365 çalışan kodumuz var.'
              : 'Behind every dashboard lies a symphony of microservices. Behind every prediction lie neural networks trained on millions of data points. Behind every safe journey lies our code, working 24/7/365 to ensure passengers reach their destinations safely.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeEngineer;