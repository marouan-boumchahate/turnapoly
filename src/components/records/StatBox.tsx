import React from 'react';

interface StatBoxProps {
  value: React.ReactNode;
  label: string;
}

export const StatBox: React.FC<StatBoxProps> = ({ value, label }) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--card)',
        borderRadius: '12px',
        padding: '10px',
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '13px',
        color: 'var(--mute)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <b
        style={{
          display: 'block',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '24px',
          color: 'var(--ink)',
          overflowWrap: 'anywhere',
        }}
      >
        {value}
      </b>
      <span>{label}</span>
    </div>
  );
};
