import React from 'react';

export const HeroTitle: React.FC = () => {
  return (
    <h1
      style={{
        fontSize: 'clamp(40px, 12vw, 84px)',
        margin: '18px 0 0',
        border: '5px solid #ffffff',
        padding: '0 0.3em',
        letterSpacing: '0.04em',
        lineHeight: 1.1,
        color: '#ffffff',
        fontFamily: 'var(--font-heading)',
      }}
    >
      MONOPOLY
    </h1>
  );
};
