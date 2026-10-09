import React from 'react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: type === 'success' ? 'var(--green)' : 'var(--blue)',
        color: '#ffffff',
        padding: '10px 20px',
        borderRadius: '99px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '15px',
        boxShadow: 'var(--shadow-md)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <span>{type === 'success' ? '✓' : 'ℹ'}</span>
      <span>{message}</span>
    </div>
  );
};
