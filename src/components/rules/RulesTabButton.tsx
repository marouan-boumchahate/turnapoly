import React, { useEffect, useRef } from 'react';
import { RuleTopicInfo } from '../../types/ruleTopic';

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
  const color = `var(--${topic.colorVar})`;

  useEffect(() => {
    if (isActive && buttonRef.current) {
      buttonRef.current.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [isActive]);

  const getTextColor = () => {
    if (!isActive) return 'var(--ink)';
    if (topic.isYellowText) return '#222222';
    return '#ffffff';
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onSelect}
      className={`mono-rules-tab ${isActive ? 'on' : ''}`}
      style={{
        flex: 'none',
        border: 0,
        borderRadius: '99px',
        padding: '7px 14px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '15px',
        backgroundColor: isActive ? color : 'var(--card)',
        color: getTextColor(),
        boxShadow: `inset 0 0 0 2px ${color}`,
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
        whiteSpace: 'nowrap',
      }}
    >
      {topic.tabLabel}
    </button>
  );
};
