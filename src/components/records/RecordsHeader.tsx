import React from 'react';

export const RecordsHeader: React.FC = () => {
  return (
    <header style={{ marginBottom: '14px' }}>
      <h2
        style={{
          fontSize: '32px',
          margin: '6px 0 4px',
          fontFamily: 'var(--font-heading)',
          color: 'var(--ink)',
        }}
      >
        Game records
      </h2>
      <p style={{ color: 'var(--mute)', margin: '0 0 14px', fontSize: '17px' }}>
        Add the result of every game. Saved on this device.
      </p>
    </header>
  );
};
