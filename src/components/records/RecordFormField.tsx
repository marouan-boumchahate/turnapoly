import React from 'react';

interface RecordFormFieldProps {
  label: string;
  children: React.ReactNode;
}

export const RecordFormField: React.FC<RecordFormFieldProps> = ({ label, children }) => {
  return (
    <label
      style={{
        display: 'grid',
        gap: '4px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '16px',
        color: 'var(--ink)',
      }}
    >
      <span>{label}</span>
      {children}
    </label>
  );
};
