import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'subtle';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled,
  children,
  style,
  className = '',
  ...rest
}) => {
  const getBackgroundColor = () => {
    if (variant === 'secondary') return 'var(--card)';
    if (variant === 'subtle') return 'rgba(0,0,0,0.06)';
    return 'var(--red)';
  };

  const getTextColor = () => {
    if (variant === 'secondary' || variant === 'subtle') return 'var(--ink)';
    return '#ffffff';
  };

  return (
    <button
      disabled={disabled}
      className={`mono-btn ${className}`}
      style={{
        border: 0,
        borderRadius: '12px',
        padding: '11px 20px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '17px',
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.3 : 1,
        transition: 'transform var(--transition-fast), opacity var(--transition-fast)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};
