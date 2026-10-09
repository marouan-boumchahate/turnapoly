import React from 'react';
import { AppRoute } from '../../types/route';

interface HeroCtaButtonProps {
  route: AppRoute;
  title: string;
  subtitle: string;
  bgColor: string;
  onNavigate: (route: AppRoute) => void;
}

export const HeroCtaButton: React.FC<HeroCtaButtonProps> = ({
  route,
  title,
  subtitle,
  bgColor,
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
      style={{ backgroundColor: bgColor }}
    >
      <span>{title}</span>
      <small>{subtitle}</small>
    </a>
  );
};
