import React, { useEffect, useRef } from 'react';
import { RuleTopicInfo } from '../../types/ruleTopic';
import { TopicIcon } from './icons/TopicIcon';

interface RulesTabButtonProps {
  topic: RuleTopicInfo;
  isActive: boolean;
  onSelect: () => void;
}

export const RulesTabButton: React.FC<RulesTabButtonProps> = ({
  topic,
  isActive,
  onSelect,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isActive && buttonRef.current) {
      buttonRef.current.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [isActive]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onSelect}
      className={`mono-rules-tab ${isActive ? 'active' : ''}`}
      style={{
        flex: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        borderRadius: '10px',
        padding: '8px 16px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '14px',
        backgroundColor: isActive ? 'var(--red)' : 'var(--card)',
        color: isActive ? '#ffffff' : 'var(--ink)',
        border: isActive ? '1px solid var(--red)' : '1px solid var(--border)',
        boxShadow: isActive ? '0 2px 6px rgba(214, 32, 46, 0.25)' : 'none',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
        whiteSpace: 'nowrap',
      }}
    >
      <TopicIcon topicId={topic.id} size={15} />
      <span>{topic.tabLabel}</span>
    </button>
  );
};
