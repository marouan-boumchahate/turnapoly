import React from 'react';

interface CardProps {
  colorVar?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  colorVar: _colorVar,
  className = '',
  children,
  style,
}) => {
  return (
    <div
      className={`mono-card ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        borderRadius: '12px',
        padding: 'clamp(12px, 2.8vw, 18px) clamp(14px, 3.2vw, 20px)',
        marginTop: '12px',
        border: '1px solid var(--border)',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
        color: 'var(--ink)',
        transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};
