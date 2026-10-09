import React, { useState } from 'react';

interface RecordSignatureBadgeProps {
  signatureUrl: string;
  winnerName: string;
}

export const RecordSignatureBadge: React.FC<RecordSignatureBadgeProps> = ({
  signatureUrl,
  winnerName,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsZoomed(true)}
        title="View winner signature"
        style={{
          border: '1px solid var(--border)',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          padding: '2px 8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          height: '36px',
          transition: 'transform var(--transition-fast), border-color var(--transition-fast)',
          flexShrink: 0,
        }}
      >
        <img
          src={signatureUrl}
          alt={`${winnerName}'s signature`}
          style={{
            maxHeight: '30px',
            maxWidth: '75px',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        <span style={{ fontSize: '11px', color: 'var(--mute)' }}>✍️</span>
      </button>

      {/* Lightbox Modal on Click */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsZoomed(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
            display: 'grid',
            placeItems: 'center',
            zIndex: 110,
            padding: '16px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '24px',
              maxWidth: '420px',
              width: '100%',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.3)',
              textAlign: 'center',
            }}
          >
            <h4
              style={{
                margin: '0 0 14px',
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                color: '#0f172a',
              }}
            >
              {winnerName}&rsquo;s Official Signature
            </h4>
            <div
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                backgroundColor: '#ffffff',
                marginBottom: '16px',
              }}
            >
              <img
                src={signatureUrl}
                alt={`${winnerName}'s full signature`}
                style={{
                  maxHeight: '160px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              style={{
                padding: '8px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'var(--red)',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
