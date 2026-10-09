import React from 'react';
import { ROUTE_NAV_ITEMS } from '../../constants/routes';
import { AppRoute } from '../../types/route';
import { ThemeMode } from '../../types/theme';
import { NavLink } from './NavLink';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  currentRoute: AppRoute;
  theme: ThemeMode;
  onNavigate: (route: AppRoute) => void;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  theme,
  onNavigate,
  onToggleTheme,
}) => {
  return (
    <header
      role="banner"
      style={{
        position: 'sticky',
        top: 'env(safe-area-inset-top, 0px)',
        zIndex: 50,
        display: 'flex',
        gap: '6px',
        alignItems: 'center',
        padding: '8px clamp(8px, 2vw, 16px)',
        backgroundColor: 'var(--red)',
        color: '#ffffff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      }}
    >
      <b
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(17px, 2.2vw, 20px)',
          marginRight: 'auto',
          letterSpacing: '0.04em',
          cursor: 'pointer',
        }}
        onClick={() => onNavigate('home')}
      >
        MONOPOLY
      </b>

      <nav aria-label="Main navigation" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
        {ROUTE_NAV_ITEMS.map((item) => (
          <NavLink
            key={item.route}
            route={item.route}
            label={item.label}
            isActive={currentRoute === item.route}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  );
};
