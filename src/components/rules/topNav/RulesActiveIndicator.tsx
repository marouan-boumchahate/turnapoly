import React from 'react';
import { RuleTopicInfo } from '../../../types/ruleTopic';

interface RulesActiveIndicatorProps {
  displayedTopic: RuleTopicInfo;
  isHovered: boolean;
}

export const RulesActiveIndicator: React.FC<RulesActiveIndicatorProps> = ({
  displayedTopic,
  isHovered,
}) => {
  return (
    <div className={`rules-chapter-indicator ${isHovered ? 'hovered' : ''}`} aria-live="polite">
      <span className="rules-indicator-label">
        Chapter {displayedTopic.stepNumber} of 09
      </span>
      <span className="rules-indicator-divider">·</span>
      <span className="rules-indicator-title">{displayedTopic.tabLabel}</span>
    </div>
  );
};
