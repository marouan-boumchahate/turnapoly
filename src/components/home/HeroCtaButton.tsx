import React from 'react';
import { AppRoute } from '../../types/route';

interface HeroCtaButtonProps {
  route: AppRoute;
  title: string;
  subtitle: string;
  bgColor: string;
  textColor?: string;
  onNavigate: (route: AppRoute) => void;
}

export const HeroCtaButton: React.FC<HeroCtaButtonProps> = ({
  route,
  title,
  subtitle,
  bgColor,
  textColor = '#0f172a',
  onNavigate,
}) => {
  return (
    <a
      href={`#/${route}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(route);
      }}
      className="hero-cta-btn"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <span>{title}</span>
      <small style={{ opacity: 0.85 }}>{subtitle}</small>
    </a>
  );
};
