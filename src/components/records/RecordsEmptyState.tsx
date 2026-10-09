import React from 'react';

export const RecordsEmptyState: React.FC = () => {
  return (
    <div
      className="empty"
      style={{
        textAlign: 'center',
        color: 'var(--mute)',
        padding: '36px 12px',
        backgroundColor: 'var(--card)',
        borderRadius: '12px',
        border: '1px dashed var(--border)',
        marginTop: '12px',
      }}
    >
      <div style={{ fontSize: '32px', marginBottom: '8px' }}>🎲</div>
      <p style={{ margin: 0, fontWeight: 600 }}>
        No games yet. Save your first result above.
      </p>
    </div>
  );
};
