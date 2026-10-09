import React from 'react';

interface RecordFormFieldProps {
  label: string;
  children: React.ReactNode;
}

export const RecordFormField: React.FC<RecordFormFieldProps> = ({ label, children }) => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '6px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '16px',
        color: 'var(--ink)',
      }}
    >
      <label>{label}</label>
      {children}
    </div>
  );
};
