import React from 'react';

export const HeroTagline: React.FC = () => {
  return (
    <p
      style={{
        maxWidth: '30ch',
        fontSize: '19px',
        margin: '12px 0 22px',
        color: '#ffffff',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
      }}
    >
      Buy it. Rent it. Own it. Plan tonight's game here.
    </p>
  );
};
