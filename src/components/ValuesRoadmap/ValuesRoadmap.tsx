import type { FC } from 'react';
import './ValuesRoadmap.css';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface RoadmapBlock {
  year: number;
  title: string;
  color: string;
  goal: string;
  items: string[];
}

const coreValues: CoreValue[] = [
  {
    icon: "🛡️",
    title: "Security",
    description: "Protection Beyond Time. Enterprise-level encryption and zero-trust architecture protecting critical infrastructure.",
    color: "#3B82F6" // blue
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Intelligence Beyond Speed. Power to manage massive datasets in real-time with uncompromising low latency.",
    color: "#F97316" // orange
  },
  {
    icon: "✨",
    title: "Modern Design",
    description: "User-Centric Experience. Simplifying complex systems with intuitive, clean interfaces to accelerate decision-making.",
    color: "#EAB308" // yellow
  },
  {
    icon: "✅",
    title: "Quality",
    description: "Zero-Error Commitment. Production-ready, rigorously tested solutions for flawless and reliable operations.",
    color: "#EF4444" // red
  }
];

const roadmapBlocks: RoadmapBlock[] = [
  {
    year: 2025,
    title: "The Digital Core Year",
    color: "#1D4ED8", // dark blue
    goal: "Digital transformation fundamentals are laid. Every process becomes data-driven.",
    items: [
      "Full platform deployment",
      "25,000+ daily active users",
      "500+ reports and smart dashboards",
      "Fully real-time data flow"
    ]
  },
  {
    year: 2027,
    title: "Autonomous Intelligence Layer",
    color: "#DC2626", // red
    goal: "Decision-making authority transitions to AI agents. Maintenance costs and delays approach zero.",
    items: [
      "100% predictive maintenance",
      "Real-time anomaly and cyber threat detection",
      "Self-optimizing smart energy management",
      "Autonomous operational scheduling"
    ]
  },
  {
    year: 2030,
    title: "The Smart Rail Network",
    color: "#D97706", // amber
    goal: "Every train, track, and station becomes a node in the smart network. Turkey sets global standards.",
    items: [
      "Fully autonomous operation monitoring",
      "Blockchain-certified security records",
      "Carbon-neutral operation optimization",
      "Passenger Experience AI (PX AI)"
    ]
  }
];

const ValuesRoadmap: FC = () => {
  return (
    <section className="values-roadmap">
      {/* Core Values Section */}
      <div className="values-section">
        <div className="section-header">
          <h2>
            <span className="icon">🧭</span>
            The Principles That Propel Us
          </h2>
          <p className="slogan">We're building not just a platform, but a philosophy.</p>
        </div>

        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className="value-card"
              style={{ '--value-color': value.color } as React.CSSProperties}
            >
              <span className="value-icon" style={{ color: value.color }}>{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="roadmap-section">
        <div className="section-header">
          <h2>
            <span className="icon">🔭</span>
            Our Roadmap: A Revolutionary Trajectory
          </h2>
          <p className="slogan">Our roadmap isn't just ambitious; it's rewriting global standards.</p>
        </div>

        <div className="goal-banner">
          By 2030, we aim to make Turkey's railway network the smartest in the world.
        </div>

        <div className="timeline">
          {roadmapBlocks.map((block, index) => (
            <div 
              key={index} 
              className="timeline-block"
              style={{ '--block-color': block.color } as React.CSSProperties}
            >
              <div className="year-marker">
                <span className="year">{block.year}</span>
              </div>
              <div className="block-content">
                <h3>{block.title}</h3>
                <p className="block-goal">{block.goal}</p>
                <ul className="block-items">
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Beyond 2030 */}
        <div className="future-vision">
          <h3>Beyond 2030: The Dream Realized</h3>
          <p>
            Imagine a railway network that knows passengers' needs before they do, where failures never 
            materialize. A world where every journey is perfect, secure, efficient, and completely 
            sustainable. This isn't science fiction. This is the inevitable outcome of our roadmap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesRoadmap;