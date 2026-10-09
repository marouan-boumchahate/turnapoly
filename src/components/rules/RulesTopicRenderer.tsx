import React from 'react';
import { TipsTopic } from './topics/TipsTopic';
import { SetupTopic } from './topics/SetupTopic';
import { YourTurnTopic } from './topics/YourTurnTopic';
import { PropertiesTopic } from './topics/PropertiesTopic';
import { SpacesTopic } from './topics/SpacesTopic';
import { JailTopic } from './topics/JailTopic';
import { BuildingsTopic } from './topics/BuildingsTopic';
import { DealsTopic } from './topics/DealsTopic';
import { NoMoneyTopic } from './topics/NoMoneyTopic';

interface RulesTopicRendererProps {
  activeIndex: number;
}

export const RulesTopicRenderer: React.FC<RulesTopicRendererProps> = ({ activeIndex }) => {
  switch (activeIndex) {
    case 0:
      return <TipsTopic />;
    case 1:
      return <SetupTopic />;
    case 2:
      return <YourTurnTopic />;
    case 3:
      return <PropertiesTopic />;
    case 4:
      return <SpacesTopic />;
    case 5:
      return <JailTopic />;
    case 6:
      return <BuildingsTopic />;
    case 7:
      return <DealsTopic />;
    case 8:
      return <NoMoneyTopic />;
    default:
      return <TipsTopic />;
  }
};
