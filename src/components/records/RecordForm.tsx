import React, { useState } from 'react';
import { GameRecord } from '../../types/record';
import { getNowLocalISOString } from '../../utils/dateUtils';
import { RecordFormField } from './RecordFormField';
import { PlayerAutocomplete } from './PlayerAutocomplete';
import { SignaturePad } from './SignaturePad';

interface RecordFormProps {
  winnerSuggestions: string[];
  onSubmit: (record: Omit<GameRecord, 'id'>) => void;
}

export const RecordForm: React.FC<RecordFormProps> = ({
  winnerSuggestions,
  onSubmit,
}) => {
  const [name, setName] = useState('');
  const [cash, setCash] = useState('');
  const [dateTime, setDateTime] = useState(getNowLocalISOString);
  const [signature, setSignature] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const parsedCash = Number(cash);

    if (!trimmedName || isNaN(parsedCash) || parsedCash < 0 || !dateTime) {
      return;
    }

    onSubmit({
      n: trimmedName,
      m: parsedCash,
      d: dateTime,
      ...(signature ? { s: signature } : {}),
    });

    setName('');
    setCash('');
    setSignature(null);
    setDateTime(getNowLocalISOString());
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '16px',
    padding: '10px 14px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    backgroundColor: 'var(--bg)',
    color: 'var(--ink)',
    width: '100%',
    transition: 'border-color var(--transition-fast)',
  };

  return (
    <form
      id="f"
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'var(--card)',
        borderRadius: '14px',
        padding: 'clamp(14px, 3vw, 20px)',
        display: 'grid',
        gap: '14px',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <RecordFormField label="Winner's name">
        <input
          id="n"
          required
          maxLength={40}
          list="names"
          placeholder="e.g. Ali"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <PlayerAutocomplete id="names" names={winnerSuggestions} />
      </RecordFormField>

      <RecordFormField label="Cash left (₼)">
        <input
          id="m"
          type="number"
          inputMode="numeric"
          min="0"
          required
          placeholder="e.g. 2400"
          value={cash}
          onChange={(e) => setCash(e.target.value)}
          style={inputStyle}
        />
      </RecordFormField>

      <RecordFormField label="Game start (date and time)">
        <input
          id="d"
          type="datetime-local"
          required
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          style={inputStyle}
        />
      </RecordFormField>

      <RecordFormField label="Winner's Signature (Optional)">
        <SignaturePad onChange={setSignature} />
      </RecordFormField>

      <button
        type="submit"
        className="sub-btn"
        style={{
          border: 0,
          borderRadius: '10px',
          padding: '12px 22px',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '16px',
          backgroundColor: 'var(--red)',
          color: '#ffffff',
          cursor: 'pointer',
          transition: 'background-color var(--transition-fast), transform var(--transition-fast)',
          marginTop: '4px',
        }}
      >
        Save game
      </button>
    </form>
  );
};
