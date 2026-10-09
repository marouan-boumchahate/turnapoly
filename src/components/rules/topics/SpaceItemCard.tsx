import React from 'react';
import { Card } from '../../ui/Card';

interface SpaceItemCardProps {
  title: string;
  description: string;
}

export const SpaceItemCard: React.FC<SpaceItemCardProps> = ({ title, description }) => {
  return (
    <Card colorVar="sky" style={{ margin: 0 }}>
      <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>{title}</h4>
      <p style={{ margin: '6px 0' }}>{description}</p>
    </Card>
  );
};
