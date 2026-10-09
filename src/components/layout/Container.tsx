import React from 'react';

interface ContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ id, className = '', children }) => {
  return (
    <main
      id={id}
      className={className}
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        padding: '18px 14px 60px',
        width: '100%',
      }}
    >
      {children}
    </main>
  );
};
