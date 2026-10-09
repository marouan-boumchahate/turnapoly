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
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.03)',
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
        ₼{chip.denomination}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '12px',
          color: 'var(--mute)',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          padding: '2px 8px',
          borderRadius: '4px',
        }}
      >
        {chip.count} bills
      </span>
    </div>
  );
};
