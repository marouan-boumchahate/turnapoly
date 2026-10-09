import React from 'react';
import { SpaceItemCard } from './SpaceItemCard';

const ACTION_SPACES = [
  {
    title: '➡️ GO',
    description: 'Collect ₼200 each time you pass or land on it.',
  },
  {
    title: '🚗 Free Parking',
    description: 'Nothing happens. Relax!',
  },
  {
    title: '❓ Chance / 📦 Community Chest',
    description:
      'Take the top card, do it now, then put it face down at the bottom of the pile.',
  },
  {
    title: '💸 Income / Luxury Tax',
    description: 'Pay the amount shown to the bank.',
  },
  {
    title: '👮 Go to Jail',
    description: 'Move to Jail. No ₼200, even if you pass GO. Your turn ends.',
  },
  {
    title: '👀 Just Visiting',
    description:
      'Only landed here? Put your token in the "Just Visiting" area. Nothing happens.',
  },
];

export const SpacesTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-spaces-title">
      <h3 id="topic-spaces-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Action spaces
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '12px',
        }}
      >
        {ACTION_SPACES.map((space) => (
          <SpaceItemCard
            key={space.title}
            title={space.title}
            description={space.description}
          />
        ))}
      </div>
    </article>
  );
};
