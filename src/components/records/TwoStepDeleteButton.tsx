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
        border: isArmed ? '1px solid var(--warn-border)' : '1px solid var(--border)',
        backgroundColor: isArmed ? 'var(--warn-bg)' : 'var(--card-subtle)',
        borderRadius: '6px',
        padding: '6px 12px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '12px',
        color: isArmed ? 'var(--warn-text)' : 'var(--mute)',
        cursor: 'pointer',
        transition: 'all var(--transition-fast)',
        whiteSpace: 'nowrap',
      }}
      title={isArmed ? 'Click again to permanently delete' : 'Delete record'}
    >
      {isArmed ? 'Confirm Delete' : 'Delete'}
    </button>
  );
};
