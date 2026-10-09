import React from 'react';
import { GameRecord } from '../../types/record';
import { downloadRecordsJson } from '../../services/recordsSyncService';

interface OwnerStatusBarProps {
  isOwner: boolean;
  games: GameRecord[];
  onOpenAuthModal: () => void;
  onLogout: () => void;
}

export const OwnerStatusBar: React.FC<OwnerStatusBarProps> = ({
  isOwner,
  games,
  onOpenAuthModal,
  onLogout,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px',
        padding: '10px 14px',
        borderRadius: '10px',
        backgroundColor: isOwner ? 'var(--red-subtle)' : 'var(--card-subtle)',
        border: `1px solid ${isOwner ? 'var(--red)' : 'var(--border)'}`,
        margin: '14px 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '15px' }}>{isOwner ? '👑' : '🔒'}</span>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '13px',
            fontWeight: 700,
            color: isOwner ? 'var(--red)' : 'var(--mute)',
          }}
        >
          {isOwner
            ? 'Owner Mode Active · You can record winners'
            : 'Public View · Only owner can record winners'}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {isOwner ? (
          <>
            <button
              type="button"
              onClick={() => downloadRecordsJson(games)}
              style={{
                padding: '5px 10px',
                borderRadius: '6px',
                border: '1px solid var(--border)',
                backgroundColor: 'var(--card)',
                color: 'var(--ink)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              title="Download updated gameRecords.json file to commit to repo"
            >
              Export JSON
            </button>
            <button
              type="button"
              onClick={onLogout}
              style={{
                padding: '5px 10px',
                borderRadius: '6px',
                border: '1px solid var(--red)',
                backgroundColor: 'transparent',
                color: 'var(--red)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Lock Owner
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={onOpenAuthModal}
            style={{
              padding: '6px 14px',
              borderRadius: '7px',
              border: 'none',
              backgroundColor: 'var(--red)',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Unlock Owner
          </button>
        )}
      </div>
    </div>
  );
};
