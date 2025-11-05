import type { FC } from 'react';
import './InnovationSection.css';

interface ProjectCard {
  icon: string;
  status: string;
  statusColor: string;
  title: string;
  description: string;
  tags: string[];
}

const projects: ProjectCard[] = [
  {
    icon: '🔬',
    status: 'Pilot',
    statusColor: '#00ff88',
    title: 'Smart Line Sentinels',
    description: 'A preventive system that monitors temperature and micro-structure changes along the line using embedded IoT sensors.',
    tags: ['IoT', 'Machine Learning', 'Edge Computing']
  },
  {
    icon: '🤖',
    status: 'Development',
    statusColor: '#ff6b6b',
    title: 'Virtual Passenger Assistant',
    description: 'A multilingual AI assistant that helps passengers with planning, information and delay predictions.',
    tags: ['LLM', 'NLP', 'Voice AI']
  },
  {
    icon: '🔗',
    status: 'Research',
    statusColor: '#ffd93d',
    title: 'Blockchain Security Ledger',
    description: 'A system that secures maintenance and safety history with immutable blockchain records.',
    tags: ['Blockchain', 'Smart Contracts', 'Audit Trail']
  },
  {
    icon: '🌱',
    status: 'Pilot',
    statusColor: '#00ff88',
    title: 'Green Route Engine',
    description: 'An eco-friendly solution that dynamically optimizes train routes to reduce energy consumption.',
    tags: ['Optimization', 'Sustainability', 'Green Tech']
  },
  {
    icon: '👁️',
    status: 'Development',
    statusColor: '#ff6b6b',
    title: 'Visual Safety Analytics',
    description: 'AI-powered cameras analyze tracks and rolling stock to detect hazards before they occur.',
    tags: ['Computer Vision', 'Real-Time', 'Safety']
  },
  {
    icon: '🌐',
    status: 'Research',
    statusColor: '#ffd93d',
    title: 'Digital Twin Simulator',
    description: 'Creates virtual replicas of rail systems to test scenarios and run safe simulations.',
    tags: ['Simulation', '3D Modeling', 'Testing']
  }
];

const InnovationSection: FC = () => {
  return (
    <section className="innovation-section">
      <div className="innovation-section__header">
        <span className="innovation-section__label">🔬 Innovation Center</span>
        <h2 className="innovation-section__title">Coding the Future</h2>
        <p className="innovation-section__subtitle">
          We're testing tomorrow's technologies today to push the boundaries of the present.
        </p>
      </div>

      <div className="innovation-section__projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card__header">
              <span className="project-card__icon">{project.icon}</span>
              <span 
                className="project-card__status"
                style={{ backgroundColor: project.statusColor + '20', color: project.statusColor }}
              >
                {project.status}
              </span>
            </div>
            <h3 className="project-card__title">{project.title}</h3>
            <p className="project-card__description">{project.description}</p>
            <div className="project-card__tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="innovation-section__footer">
        <div className="info-box">
          <h2 className="info-box__title">Experimentation Never Ends</h2>
          <p className="info-box__text">
            Every day we test a new idea. Some fail, some change the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;