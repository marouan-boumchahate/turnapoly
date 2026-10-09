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
        title="Official Rulebook"
        subtitle="Interactive tournament guidelines"
        bgColor="#ffffff"
        textColor="#0f172a"
        onNavigate={onNavigate}
      />
      <HeroCtaButton
        route="records"
        title="Game Records"
        subtitle="Track winners & cash metrics"
        bgColor="var(--green)"
        textColor="#ffffff"
        onNavigate={onNavigate}
      />
    </div>
  );
};
