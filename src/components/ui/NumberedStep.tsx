import React from 'react';

interface NumberedStepProps {
  stepNumber: number;
  colorVar?: string;
  children: React.ReactNode;
}

export const NumberedStep: React.FC<NumberedStepProps> = ({
  stepNumber,
  colorVar = 'var(--red)',
  children,
}) => {
  const dynamicColor = colorVar.startsWith('var(') ? colorVar : `var(--${colorVar})`;

  return (
    <li
      style={{
        display: 'flex',
        gap: '14px',
        margin: '12px 0',
        padding: '10px 0',
        alignItems: 'flex-start',
        listStyle: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          flex: 'none',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: dynamicColor,
          color: '#ffffff',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '14px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        }}
      >
        {stepNumber}
      </span>
      <div style={{ flex: 1, minWidth: 0, fontSize: '16px', lineHeight: 1.6 }}>{children}</div>
    </li>
  );
};
