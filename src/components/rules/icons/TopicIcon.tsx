import React from 'react';
import { OverviewIcon } from './OverviewIcon';
import { SetupIcon } from './SetupIcon';
import { TurnIcon } from './TurnIcon';
import { PropertiesIcon } from './PropertiesIcon';
import { SpacesIcon } from './SpacesIcon';
import { JailIcon } from './JailIcon';
import { BuildingsIcon } from './BuildingsIcon';
import { DealsIcon } from './DealsIcon';
import { BankruptcyIcon } from './BankruptcyIcon';

interface TopicIconProps {
  topicId: string;
  size?: number;
  className?: string;
}

export const TopicIcon: React.FC<TopicIconProps> = ({
  topicId,
  size = 18,
  className = '',
}) => {
  switch (topicId) {
    case 'tips':
      return <OverviewIcon size={size} className={className} />;
    case 'setup':
      return <SetupIcon size={size} className={className} />;
    case 'turn':
      return <TurnIcon size={size} className={className} />;
    case 'properties':
      return <PropertiesIcon size={size} className={className} />;
    case 'spaces':
      return <SpacesIcon size={size} className={className} />;
    case 'jail':
      return <JailIcon size={size} className={className} />;
    case 'buildings':
      return <BuildingsIcon size={size} className={className} />;
    case 'deals':
      return <DealsIcon size={size} className={className} />;
    case 'no-money':
      return <BankruptcyIcon size={size} className={className} />;
    default:
      return <OverviewIcon size={size} className={className} />;
  }
};
