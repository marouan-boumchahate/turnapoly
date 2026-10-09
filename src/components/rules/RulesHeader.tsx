import React from 'react';

export const RulesHeader: React.FC = () => {
  return (
    <header style={{ marginBottom: '20px' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: 'var(--font-heading)',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--red)',
          backgroundColor: 'rgba(214, 32, 46, 0.08)',
          padding: '4px 10px',
          borderRadius: '99px',
          marginBottom: '8px',
        }}
      >
        Official Rulebook & Standard Guidelines
      </div>
      <h2
        style={{
          fontSize: 'clamp(28px, 4vw, 36px)',
          margin: '4px 0 6px',
          fontFamily: 'var(--font-heading)',
          color: 'var(--ink)',
          letterSpacing: '-0.02em',
        }}
      >
        Game Rules & Reference Guide
      </h2>
      <p
        style={{
          color: 'var(--mute)',
          margin: '0',
          fontSize: '16px',
          maxWidth: '75ch',
          lineHeight: 1.5,
        }}
      >
        Structured, comprehensive rules for board setup, fair trading, property auctions, and end-game resolution.
      </p>
    </header>
  );
};
