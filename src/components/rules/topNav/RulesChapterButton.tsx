import React, { useEffect, useRef } from 'react';
import { RuleTopicInfo } from '../../../types/ruleTopic';
import { TopicIcon } from '../icons/TopicIcon';

interface RulesChapterButtonProps {
  topic: RuleTopicInfo;
  isActive: boolean;
  onSelect: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const RulesChapterButton: React.FC<RulesChapterButtonProps> = ({
  topic,
  isActive,
  onSelect,
  onHoverStart,
  onHoverEnd,
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
      role="tab"
      aria-selected={isActive}
      aria-label={`Chapter ${topic.stepNumber}: ${topic.tabLabel}`}
      onClick={onSelect}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onFocus={onHoverStart}
      onBlur={onHoverEnd}
      className={`rules-chapter-btn ${isActive ? 'active' : ''}`}
    >
      <span className="rules-chapter-num" aria-hidden="true">
        {topic.stepNumber}
      </span>
      <TopicIcon topicId={topic.id} size={18} />
      <span className="rules-chapter-tooltip" role="tooltip">
        {topic.stepNumber} · {topic.tabLabel}
      </span>
    </button>
  );
};
