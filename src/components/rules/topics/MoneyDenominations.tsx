import React from 'react';
import { MONOPOLY_STARTING_CASH_CHIPS } from '../../../constants/moneyChips';
import { MoneyChipItem } from './MoneyChipItem';

export const MoneyDenominations: React.FC = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
        gap: '8px',
        margin: '8px 0',
      }}
    >
      {MONOPOLY_STARTING_CASH_CHIPS.map((chip) => (
        <MoneyChipItem key={chip.denomination} chip={chip} />
      ))}
    </div>
  );
};
