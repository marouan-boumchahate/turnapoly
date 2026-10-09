import React from 'react';

interface StatBoxProps {
  value: React.ReactNode;
  label: string;
  valueColor?: string;
}

export const StatBox: React.FC<StatBoxProps> = ({
  value,
  label,
  valueColor = 'var(--ink)',
}) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--card)',
        borderRadius: '12px',
        padding: '14px 10px',
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: '13px',
        color: 'var(--mute)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <b
        style={{
          display: 'block',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '24px',
          color: valueColor,
          overflowWrap: 'anywhere',
          marginBottom: '2px',
        }}
      >
        {value}
      </b>
      <span>{label}</span>
    </div>
  );
};
