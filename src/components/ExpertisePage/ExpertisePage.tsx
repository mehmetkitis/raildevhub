import type { FC } from 'react';
import './ExpertisePage.css';

interface ExpertiseArea {
  title: string;
  icon: string;
  description: string;
}

interface ExpertiseSection {
  title: string;
  icon: string;
  description: string;
  areas: ExpertiseArea[];
}

const expertiseSections: ExpertiseSection[] = [
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    description: "Advanced AI solutions transforming railway operations into intelligent, self-optimizing systems.",
    areas: [
      {
        title: "Predictive Maintenance",
        icon: "🔧",
        description: "AI-driven systems that predict equipment failures before they occur, minimizing downtime."
      },
      {
        title: "Autonomous Operations",
        icon: "⚡",
        description: "Self-managing systems for optimal route planning and real-time traffic management."
      },
      {
        title: "Safety Systems",
        icon: "🛡️",
        description: "AI-powered safety monitoring and incident prevention systems."
      }
    ]
  },
  {
    title: "Software Engineering",
    icon: "💻",
    description: "Building robust, scalable, and secure platforms that power modern railway infrastructure.",
    areas: [
      {
        title: "Cloud-Native Development",
        icon: "☁️",
        description: "Microservices architecture designed for reliability and seamless scaling."
      },
      {
        title: "Real-time Data Processing",
        icon: "📊",
        description: "High-performance systems processing millions of data points per second."
      },
      {
        title: "Secure & Scalable Architectures",
        icon: "🔐",
        description: "Enterprise-grade platforms built with security and scalability at their core."
      }
    ]
  }
];

const ExpertisePage: FC = () => {
  return (
    <div className="expertise-page">
      {/* Hero Section */}
      <section className="expertise-hero">
        <div className="hero-content">
          <h1>Coding the Future of Railways: AI and Engineering Excellence</h1>
          <div className="hero-line"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="expertise-content">
        <div className="expertise-grid">
          {expertiseSections.map((section, index) => (
            <div key={index} className="expertise-section">
              <div className="section-header">
                <span className="section-icon">{section.icon}</span>
                <h2>{section.title}</h2>
                <p className="section-description">{section.description}</p>
              </div>
              
              <div className="expertise-areas">
                {section.areas.map((area, areaIndex) => (
                  <div key={areaIndex} className="area-card">
                    <div className="card-header">
                      <span className="area-icon">{area.icon}</span>
                      <h3>{area.title}</h3>
                    </div>
                    <p>{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Banner */}
      <section className="tech-stack-banner">
        <div className="banner-content">
          <h2>Our Technology Stack</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>AI & ML</h3>
              <ul>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Scikit-learn</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Cloud & DevOps</h3>
              <ul>
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>AWS/Azure</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;