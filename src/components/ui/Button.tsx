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
    if (variant === 'subtle') return 'var(--card-subtle)';
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
        border: variant === 'primary' ? 'none' : '1px solid var(--border)',
        borderRadius: '10px',
        padding: '11px 20px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: '16px',
        backgroundColor: getBackgroundColor(),
        color: getTextColor(),
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        transition: 'all var(--transition-fast)',
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
