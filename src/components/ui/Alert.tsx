import React from 'react';

export type AlertVariant = 'tip' | 'warn' | 'good';

interface AlertProps {
  variant: AlertVariant;
  label?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Alert: React.FC<AlertProps> = ({
  variant,
  label,
  className = '',
  children,
  style,
}) => {
  const getStyles = () => {
    switch (variant) {
      case 'tip':
        return {
          bg: 'var(--tip-bg)',
          text: 'var(--tip-text)',
          border: '1px solid rgba(247, 212, 20, 0.35)',
          defaultLabel: 'NOTE',
        };
      case 'warn':
        return {
          bg: 'var(--warn-bg)',
          text: 'var(--warn-text)',
          border: '1px solid rgba(214, 32, 46, 0.3)',
          defaultLabel: 'IMPORTANT',
        };
      case 'good':
        return {
          bg: 'var(--good-bg)',
          text: 'var(--good-text)',
          border: '1px solid rgba(31, 157, 85, 0.3)',
          defaultLabel: 'KEY OBJECTIVE',
        };
    }
  };

  const alertStyle = getStyles();
  const displayLabel = label || alertStyle.defaultLabel;

  return (
    <div
      className={`mono-alert mono-alert-${variant} ${className}`}
      role="alert"
      style={{
        borderRadius: '12px',
        padding: 'clamp(12px, 2.5vw, 14px) clamp(14px, 3vw, 18px)',
        marginTop: '14px',
        backgroundColor: alertStyle.bg,
        color: alertStyle.text,
        border: alertStyle.border,
        lineHeight: 1.55,
        fontSize: 'clamp(14px, 1.8vw, 15px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        ...style,
      }}
    >
      {displayLabel && (
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            opacity: 0.9,
          }}
        >
          {displayLabel}
        </span>
      )}
      <div style={{ fontWeight: 600 }}>{children}</div>
    </div>
  );
};
