import React from 'react';
import { ThemeMode } from '../../types/theme';

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const getIcon = () => {
    if (theme === 'light') return '☀️';
    if (theme === 'dark') return '🌙';
    return '🌓';
  };

  const getAriaLabel = () => {
    if (theme === 'light') return 'Switch to dark theme';
    if (theme === 'dark') return 'Switch to system theme';
    return 'Switch to light theme';
  };

  return (
    <button
      onClick={onToggle}
      aria-label={getAriaLabel()}
      title={getAriaLabel()}
      style={{
        background: 'rgba(255, 255, 255, 0.2)',
        border: 'none',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        fontSize: '15px',
        marginLeft: '4px',
        color: '#ffffff',
        transition: 'background var(--transition-fast)',
      }}
    >
      {getIcon()}
    </button>
  );
};
