import React from 'react';
import { AppRoute } from '../../types/route';

interface NavLinkProps {
  route: AppRoute;
  label: string;
  isActive: boolean;
  onNavigate: (route: AppRoute) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  route,
  label,
  isActive,
  onNavigate,
}) => {
  return (
    <a
      href={route === 'home' ? '#/' : `#/${route}`}
      onClick={(e) => {
        e.preventDefault();
        onNavigate(route);
      }}
      className={`mono-nav-link ${isActive ? 'on' : ''}`}
      style={{
        color: isActive ? 'var(--red)' : '#ffffff',
        backgroundColor: isActive ? '#ffffff' : 'transparent',
        textDecoration: 'none',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '15px',
        padding: '6px 14px',
        borderRadius: '99px',
        transition: 'background-color var(--transition-fast), color var(--transition-fast)',
        display: 'inline-block',
      }}
    >
      {label}
    </a>
  );
};
