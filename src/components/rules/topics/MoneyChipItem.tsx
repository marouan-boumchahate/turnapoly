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
        borderRadius: '10px',
        padding: '6px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '16px',
        color: '#222222',
        backgroundColor: chip.bgColor,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
    >
      ₼{chip.denomination}
      <small
        style={{
          display: 'block',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '13px',
        }}
      >
        ×{chip.count}
      </small>
    </div>
  );
};
