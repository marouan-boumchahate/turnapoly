import React from 'react';

interface ContainerProps {
  id?: string;
  size?: 'normal' | 'wide' | 'full';
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  id,
  size = 'normal',
  className = '',
  children,
}) => {
  const getMaxWidth = () => {
    if (size === 'wide') return '1440px';
    if (size === 'full') return '100%';
    return '860px';
  };

  return (
    <main
      id={id}
      className={className}
      style={{
        maxWidth: getMaxWidth(),
        margin: '0 auto',
        padding: 'clamp(14px, 2.5vw, 24px) clamp(12px, 3.5vw, 24px) 80px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </main>
  );
};
