import React from 'react';
import { AppRoute } from '../../types/route';
import { Stage3D } from './Stage3D';
import { HeroTitle } from './HeroTitle';
import { HeroTagline } from './HeroTagline';
import { HeroCtaGroup } from './HeroCtaGroup';
import '../../styles/home.css';

interface HomeViewProps {
  onNavigate: (route: AppRoute) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      style={{
        minHeight: 'calc(100vh - 52px)',
        background: 'radial-gradient(circle at 50% 30%, #e8504b, var(--red) 60%, #8f1019)',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px 36px',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <Stage3D />
      <HeroTitle />
      <HeroTagline />
      <HeroCtaGroup onNavigate={onNavigate} />
    </section>
  );
};
