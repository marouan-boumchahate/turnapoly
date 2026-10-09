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
        backgroundColor: type === 'success' ? 'var(--green)' : 'var(--ink)',
        color: '#ffffff',
        padding: '10px 22px',
        borderRadius: '99px',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: '14px',
        boxShadow: 'var(--shadow-md)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <span>{type === 'success' ? '✓' : '•'}</span>
      <span>{message}</span>
    </div>
  );
};
