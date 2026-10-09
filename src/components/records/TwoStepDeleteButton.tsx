import React, { useState, useEffect } from 'react';

interface TwoStepDeleteButtonProps {
  onConfirmDelete: () => void;
}

export const TwoStepDeleteButton: React.FC<TwoStepDeleteButtonProps> = ({
  onConfirmDelete,
}) => {
  const [isArmed, setIsArmed] = useState(false);

  useEffect(() => {
    if (!isArmed) return;

    const timer = setTimeout(() => {
      setIsArmed(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [isArmed]);

  const handleClick = () => {
    if (!isArmed) {
      setIsArmed(true);
    } else {
      onConfirmDelete();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        border: 0,
        backgroundColor: isArmed ? 'var(--warn-bg)' : 'rgba(0, 0, 0, 0.06)',
        borderRadius: '8px',
        padding: '6px 10px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '13px',
        color: isArmed ? 'var(--warn-text)' : 'var(--ink)',
        cursor: 'pointer',
        transition: 'background-color var(--transition-fast), color var(--transition-fast)',
        whiteSpace: 'nowrap',
      }}
      title={isArmed ? 'Click again to permanently delete' : 'Delete record'}
    >
      {isArmed ? 'Tap again' : 'Delete'}
    </button>
  );
};
