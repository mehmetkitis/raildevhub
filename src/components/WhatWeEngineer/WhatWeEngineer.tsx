import type { FC } from 'react';
import './WhatWeEngineer.css';

interface EngineeringCard {
  icon: string;
  title: string;
  color: string;
  content: string;
  items: string[];
}

const engineeringCards: EngineeringCard[] = [
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

const WhatWeEngineer: FC = () => {
  return (
    <section className="what-we-engineer">
      <div className="section-header">
        <h2>
          <span className="icon">🛠️</span>
          What We Engineer: Pushing Boundaries
        </h2>
        <p className="slogan">Our fingers in the code, our minds in the future, our hearts on the rails.</p>
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
          <h3>The Hidden Power of Data: Heart of the Infrastructure</h3>
          <p>
            Behind every dashboard lies a symphony of microservices. Behind every prediction lie neural 
            networks trained on millions of data points. Behind every safe journey lies our code, working 
            24/7/365 to ensure passengers reach their destinations safely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeEngineer;