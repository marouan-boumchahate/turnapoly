import React from 'react';
import { Button } from '../ui/Button';

interface RulesBottomNavProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const RulesBottomNav: React.FC<RulesBottomNavProps> = ({
  onPrev,
  onNext,
  isFirst,
  isLast,
}) => {
  return (
    <nav
      aria-label="Rules pagination"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        marginTop: '22px',
      }}
    >
      <Button disabled={isFirst} onClick={onPrev}>
        ← Back
      </Button>
      <Button disabled={isLast} onClick={onNext}>
        Next →
      </Button>
    </nav>
  );
};
