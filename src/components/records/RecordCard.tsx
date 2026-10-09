import React from 'react';
import { GameRecord } from '../../types/record';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDisplayDateTime } from '../../utils/dateUtils';
import { TwoStepDeleteButton } from './TwoStepDeleteButton';

interface RecordCardProps {
  record: GameRecord;
  accentColor: string;
  onDelete: (id: string | number) => void;
}

export const RecordCard: React.FC<RecordCardProps> = ({
  record,
  accentColor,
  onDelete,
}) => {
  return (
    <div
      className="mono-record-card"
      style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        backgroundColor: 'var(--card)',
        borderRadius: '12px',
        padding: '12px 14px',
        marginTop: '10px',
        borderLeft: `8px solid var(--${accentColor})`,
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <b
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: '19px',
            color: 'var(--ink)',
            overflowWrap: 'anywhere',
            display: 'block',
          }}
        >
          🏆 {record.n}
        </b>
        <small
          style={{
            display: 'block',
            color: 'var(--mute)',
            fontFamily: 'var(--font-body)',
            marginTop: '2px',
          }}
        >
          {formatDisplayDateTime(record.d)}
        </small>
      </div>

      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '20px',
          color: 'var(--green)',
          whiteSpace: 'nowrap',
        }}
      >
        {formatCurrency(record.m)}
      </div>

      <TwoStepDeleteButton onConfirmDelete={() => onDelete(record.id)} />
    </div>
  );
};
