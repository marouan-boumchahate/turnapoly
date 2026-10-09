import React from 'react';
import { AppRoute } from '../../types/route';
import { HeroCtaButton } from './HeroCtaButton';

interface HeroCtaGroupProps {
  onNavigate: (route: AppRoute) => void;
}

export const HeroCtaGroup: React.FC<HeroCtaGroupProps> = ({ onNavigate }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '14px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <HeroCtaButton
        route="rules"
        title="📖 Learn the rules"
        subtitle="Step by step, easy to follow"
        bgColor="var(--yellow)"
        onNavigate={onNavigate}
      />
      <HeroCtaButton
        route="records"
        title="🏆 Record a game"
        subtitle="Winner, cash left, date and time"
        bgColor="#ffffff"
        onNavigate={onNavigate}
      />
    </div>
  );
};
