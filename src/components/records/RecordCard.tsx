import React from 'react';
import { GameRecord } from '../../types/record';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDisplayDateTime } from '../../utils/dateUtils';
import { TwoStepDeleteButton } from './TwoStepDeleteButton';

interface RecordCardProps {
  record: GameRecord;
  accentColor?: string;
  onDelete: (id: string | number) => void;
}

export const RecordCard: React.FC<RecordCardProps> = ({
  record,
  accentColor: _accentColor,
  onDelete,
}) => {
  return (
    <div
      className="mono-record-card"
      style={{
        display: 'flex',
        gap: 'clamp(8px, 2.5vw, 14px)',
        alignItems: 'center',
        backgroundColor: 'var(--card)',
        borderRadius: '12px',
        padding: 'clamp(10px, 2.5vw, 14px) clamp(12px, 3vw, 18px)',
        marginTop: '10px',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'border-color var(--transition-fast)',
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <b
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(15px, 2.8vw, 18px)',
            color: 'var(--ink)',
            overflowWrap: 'anywhere',
            display: 'block',
          }}
        >
          {record.n}
        </b>
        <small
          style={{
            display: 'block',
            color: 'var(--mute)',
            fontFamily: 'var(--font-body)',
            marginTop: '2px',
            fontSize: 'clamp(11px, 2vw, 13px)',
          }}
        >
          {formatDisplayDateTime(record.d)}
        </small>
      </div>

      <div
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(15px, 2.8vw, 18px)',
          color: 'var(--green)',
          backgroundColor: 'var(--green-subtle)',
          padding: 'clamp(4px, 1.2vw, 6px) clamp(8px, 2vw, 12px)',
          borderRadius: '8px',
          whiteSpace: 'nowrap',
          letterSpacing: '0.02em',
        }}
      >
        {formatCurrency(record.m)}
      </div>

      <TwoStepDeleteButton onConfirmDelete={() => onDelete(record.id)} />
    </div>
  );
};
