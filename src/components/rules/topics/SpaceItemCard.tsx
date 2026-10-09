import React from 'react';
import { Card } from '../../ui/Card';

interface SpaceItemCardProps {
  title: string;
  badgeText?: string;
  description: string;
}

export const SpaceItemCard: React.FC<SpaceItemCardProps> = ({ title, badgeText, description }) => {
  return (
    <Card colorVar="sky" style={{ margin: 0, padding: '16px 18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
        <h4 style={{ margin: 0, fontSize: '17px', color: 'var(--ink)' }}>{title}</h4>
        {badgeText && (
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--mute)',
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              padding: '2px 8px',
              borderRadius: '4px',
            }}
          >
            {badgeText}
          </span>
        )}
      </div>
      <p style={{ margin: 0, fontSize: '14px', color: 'var(--mute)', lineHeight: 1.5 }}>
        {description}
      </p>
    </Card>
  );
};
