import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  colorVar?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  colorVar = 'var(--red)',
}) => {
  const percentage = Math.min(100, Math.max(0, ((current + 1) / total) * 100));
  const dynamicColor = colorVar.startsWith('var(') ? colorVar : `var(--${colorVar})`;

  return (
    <div
      role="progressbar"
      aria-valuenow={current + 1}
      aria-valuemin={1}
      aria-valuemax={total}
      aria-label={`Step ${current + 1} of ${total}`}
      style={{
        width: '100%',
        height: '6px',
        backgroundColor: 'var(--border)',
        borderRadius: '99px',
        overflow: 'hidden',
        margin: '12px 0 16px',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${percentage}%`,
          backgroundColor: dynamicColor,
          transition: 'width var(--transition-normal), background-color var(--transition-normal)',
          borderRadius: '99px',
        }}
      />
    </div>
  );
};
