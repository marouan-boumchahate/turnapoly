import React from 'react';
import { MoneyChip } from '../../../types/money';

interface MoneyChipItemProps {
  chip: MoneyChip;
}

export const MoneyChipItem: React.FC<MoneyChipItemProps> = ({ chip }) => {
  return (
    <div
      style={{
        textAlign: 'center',
        borderRadius: '8px',
        padding: '10px 8px',
        border: '1px solid var(--border)',
        backgroundColor: 'var(--card)',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '18px',
          color: 'var(--ink)',
        }}
      >
        <span style={{ color: 'var(--green)', marginRight: '2px' }}>₼</span>
        {chip.denomination}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '12px',
          color: 'var(--mute)',
          backgroundColor: 'var(--card-subtle)',
          padding: '2px 8px',
          borderRadius: '4px',
        }}
      >
        {chip.count} bills
      </span>
    </div>
  );
};
