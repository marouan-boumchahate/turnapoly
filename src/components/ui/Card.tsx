import React from 'react';

interface CardProps {
  colorVar?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  colorVar = 'var(--red)',
  className = '',
  children,
  style,
}) => {
  const dynamicColor = colorVar.startsWith('var(') ? colorVar : `var(--${colorVar})`;

  return (
    <div
      className={`mono-card ${className}`}
      style={{
        backgroundColor: 'var(--card)',
        borderRadius: '14px',
        padding: '14px 18px',
        marginTop: '12px',
        borderLeft: `8px solid ${dynamicColor}`,
        boxShadow: 'var(--shadow-sm)',
        color: 'var(--ink)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};
