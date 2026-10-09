import React from 'react';

export type AlertVariant = 'tip' | 'warn' | 'good';

interface AlertProps {
  variant: AlertVariant;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Alert: React.FC<AlertProps> = ({
  variant,
  className = '',
  children,
  style,
}) => {
  const getColors = () => {
    switch (variant) {
      case 'tip':
        return { bg: 'var(--tip-bg)', text: 'var(--tip-text)' };
      case 'warn':
        return { bg: 'var(--warn-bg)', text: 'var(--warn-text)' };
      case 'good':
        return { bg: 'var(--good-bg)', text: 'var(--good-text)' };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`mono-alert mono-alert-${variant} ${className}`}
      role="alert"
      style={{
        borderRadius: '12px',
        padding: '11px 15px',
        marginTop: '12px',
        fontWeight: 600,
        backgroundColor: colors.bg,
        color: colors.text,
        lineHeight: 1.5,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
