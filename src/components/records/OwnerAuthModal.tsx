import React, { useState } from 'react';

interface OwnerAuthModalProps {
  isOpen: boolean;
  error: string | null;
  onClose: () => void;
  onSubmit: (passcode: string) => void;
}

export const OwnerAuthModal: React.FC<OwnerAuthModalProps> = ({
  isOpen,
  error,
  onClose,
  onSubmit,
}) => {
  const [passcode, setPasscode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(passcode);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="owner-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'grid',
        placeItems: 'center',
        zIndex: 100,
        padding: '16px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'var(--card)',
          borderRadius: '16px',
          padding: '24px',
          width: '100%',
          maxWidth: '420px',
          border: '1px solid var(--border)',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.28)',
          color: 'var(--ink)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          id="owner-modal-title"
          style={{
            margin: '0 0 6px',
            fontFamily: 'var(--font-heading)',
            fontSize: '20px',
            color: 'var(--ink)',
          }}
        >
          Owner Authentication
        </h3>
        <p style={{ margin: '0 0 16px', fontSize: '14px', color: 'var(--mute)', lineHeight: 1.5 }}>
          Only the application owner is authorized to record match winners and manage tournament records.
        </p>

        {error && (
          <div
            style={{
              backgroundColor: 'var(--red-subtle)',
              color: 'var(--red)',
              padding: '8px 12px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '14px',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '12px' }}>
          <div>
            <label
              htmlFor="owner-passcode-input"
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--mute)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '6px',
              }}
            >
              Enter Owner Passcode
            </label>
            <input
              id="owner-passcode-input"
              type="password"
              required
              autoFocus
              placeholder="Passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--bg)',
                color: 'var(--ink)',
                fontSize: '16px',
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '6px' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '9px 16px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                backgroundColor: 'transparent',
                color: 'var(--ink)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '9px 18px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'var(--red)',
                color: '#ffffff',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Unlock Access
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
