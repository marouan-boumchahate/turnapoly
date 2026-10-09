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
        borderRadius: '12px',
        padding: '16px 20px',
        marginTop: '12px',
        border: '1px solid var(--border)',
        borderLeft: `4px solid ${dynamicColor}`,
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
