import React from 'react';

export const RulesHeader: React.FC = () => {
  return (
    <header style={{ marginBottom: '8px' }}>
      <h2
        style={{
          fontSize: '32px',
          margin: '6px 0 4px',
          fontFamily: 'var(--font-heading)',
          color: 'var(--ink)',
        }}
      >
        How to play
      </h2>
      <p
        style={{
          color: 'var(--mute)',
          margin: '0 0 14px',
          fontSize: '17px',
        }}
      >
        Pick a topic, or use Next to read in order.
      </p>
    </header>
  );
};
