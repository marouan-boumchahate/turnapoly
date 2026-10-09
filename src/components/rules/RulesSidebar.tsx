import React from 'react';
import { RuleTopicInfo } from '../../types/ruleTopic';
import { TopicIcon } from './icons/TopicIcon';

interface RulesSidebarProps {
  topics: RuleTopicInfo[];
  activeIndex: number;
  onSelectIndex: (index: number) => void;
}

export const RulesSidebar: React.FC<RulesSidebarProps> = ({
  topics,
  activeIndex,
  onSelectIndex,
}) => {
  return (
    <aside
      aria-label="Rules chapter directory"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        width: '280px',
        flexShrink: 0,
        position: 'sticky',
        top: 'calc(env(safe-area-inset-top, 0px) + 70px)',
        alignSelf: 'flex-start',
        backgroundColor: 'var(--card)',
        padding: '16px',
        borderRadius: '14px',
        border: '1px solid var(--border)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--mute)',
          marginBottom: '8px',
          paddingLeft: '8px',
        }}
      >
        Rulebook Chapters
      </div>

      {topics.map((topic, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={topic.id}
            type="button"
            onClick={() => onSelectIndex(index)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: isActive ? 'rgba(214, 32, 46, 0.08)' : 'transparent',
              color: isActive ? 'var(--red)' : 'var(--ink)',
              fontFamily: 'var(--font-body)',
              fontWeight: isActive ? 700 : 600,
              fontSize: '14px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'background-color var(--transition-fast)',
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '11px',
                fontWeight: 700,
                color: isActive ? 'var(--red)' : 'var(--mute)',
                opacity: 0.8,
                width: '18px',
              }}
            >
              {topic.stepNumber}
            </span>
            <TopicIcon topicId={topic.id} size={16} />
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {topic.tabLabel}
            </span>
          </button>
        );
      })}
    </aside>
  );
};
