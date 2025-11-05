import type { FC } from 'react';
import TechnologyEcosystem from '../TechnologyEcosystem/TechnologyEcosystem';
import TransformationStories from '../TransformationStories/TransformationStories';
import CallToAction from '../CallToAction/CallToAction';
import './TechnologyPage.css';

const TechnologyPage: FC = () => {
  return (
    <div className="technology-page">
      <h1>Teknoloji</h1>
      <TechnologyEcosystem />
      <TransformationStories />
      <CallToAction />
    </div>
  );
};

export default TechnologyPage;