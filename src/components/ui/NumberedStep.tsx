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
        gap: '12px',
        margin: '10px 0',
        alignItems: 'flex-start',
        listStyle: 'none',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          flex: 'none',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: dynamicColor,
          color: '#ffffff',
          display: 'grid',
          placeItems: 'center',
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '16px',
        }}
      >
        {stepNumber}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
    </li>
  );
};
