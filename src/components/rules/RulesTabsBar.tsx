import React from 'react';
import { RuleTopicInfo } from '../../types/ruleTopic';
import { RulesTabButton } from './RulesTabButton';

interface RulesTabsBarProps {
  topics: RuleTopicInfo[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
}

export const RulesTabsBar: React.FC<RulesTabsBarProps> = ({
  topics,
  activeIndex,
  onSelectIndex,
}) => {
  return (
    <div
      role="tablist"
      aria-label="Rules Categories"
      style={{
        position: 'sticky',
        top: 'calc(env(safe-area-inset-top, 0px) + 52px)',
        zIndex: 20,
        backgroundColor: 'var(--bg)',
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        padding: '10px 0',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {topics.map((topic, index) => (
        <RulesTabButton
          key={topic.id}
          topic={topic}
          isActive={index === activeIndex}
          onSelect={() => onSelectIndex(index)}
        />
      ))}
    </div>
  );
};
