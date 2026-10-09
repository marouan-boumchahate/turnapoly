import React, { useState } from 'react';
import { RuleTopicInfo } from '../../../types/ruleTopic';
import { RulesChapterButton } from './RulesChapterButton';
import { RulesActiveIndicator } from './RulesActiveIndicator';

interface RulesTopNavProps {
  topics: RuleTopicInfo[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
}

export const RulesTopNav: React.FC<RulesTopNavProps> = ({
  topics,
  activeIndex,
  onSelectIndex,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const displayedTopic =
    hoveredIndex !== null ? topics[hoveredIndex] : topics[activeIndex];

  return (
    <nav className="rules-top-nav-bar" aria-label="Rulebook chapters sequence">
      <div className="rules-chapter-track" role="tablist">
        {topics.map((topic, index) => (
          <RulesChapterButton
            key={topic.id}
            topic={topic}
            isActive={index === activeIndex}
            onSelect={() => onSelectIndex(index)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      <RulesActiveIndicator
        displayedTopic={displayedTopic}
        isHovered={hoveredIndex !== null}
      />
    </nav>
  );
};
