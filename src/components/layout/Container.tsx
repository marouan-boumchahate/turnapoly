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
        padding: size === 'wide' ? '24px 28px 80px' : '18px 14px 60px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </main>
  );
};
