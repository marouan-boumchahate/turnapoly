import React from 'react';

interface RulesBottomNavProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  prevTopicTitle?: string;
  nextTopicTitle?: string;
  currentIndex: number;
  totalTopics: number;
}

export const RulesBottomNav: React.FC<RulesBottomNavProps> = ({
  onPrev,
  onNext,
  isFirst,
  isLast,
  prevTopicTitle,
  nextTopicTitle,
  currentIndex,
  totalTopics,
}) => {
  return (
    <nav
      aria-label="Rules pagination"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        marginTop: '36px',
        paddingTop: '24px',
        borderTop: '1px solid var(--border)',
      }}
    >
      {/* Previous Button */}
      <button
        type="button"
        disabled={isFirst}
        onClick={onPrev}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4px',
          padding: '12px 20px',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          backgroundColor: isFirst ? 'transparent' : 'var(--card)',
          color: 'var(--ink)',
          cursor: isFirst ? 'not-allowed' : 'pointer',
          opacity: isFirst ? 0.35 : 1,
          textAlign: 'left',
          transition: 'all var(--transition-fast)',
          minWidth: '180px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: 'var(--mute)',
            textTransform: 'uppercase',
          }}
        >
          ← Previous
        </span>
        <span style={{ fontSize: '14px', fontWeight: 600 }}>
          {prevTopicTitle || 'Beginning'}
        </span>
      </button>

      {/* Progress pill indicator */}
      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '13px',
          color: 'var(--mute)',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          padding: '6px 14px',
          borderRadius: '99px',
          letterSpacing: '0.04em',
        }}
      >
        Topic {currentIndex + 1} of {totalTopics}
      </div>

      {/* Next Button */}
      <button
        type="button"
        disabled={isLast}
        onClick={onNext}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '4px',
          padding: '12px 20px',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          backgroundColor: isLast ? 'transparent' : 'var(--card)',
          color: 'var(--ink)',
          cursor: isLast ? 'not-allowed' : 'pointer',
          opacity: isLast ? 0.35 : 1,
          textAlign: 'right',
          transition: 'all var(--transition-fast)',
          minWidth: '180px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: 'var(--mute)',
            textTransform: 'uppercase',
          }}
        >
          Next →
        </span>
        <span style={{ fontSize: '14px', fontWeight: 600 }}>
          {nextTopicTitle || 'Completed'}
        </span>
      </button>
    </nav>
  );
};
