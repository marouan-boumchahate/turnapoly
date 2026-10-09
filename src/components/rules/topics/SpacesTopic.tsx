import React from 'react';
import { SpaceItemCard } from './SpaceItemCard';

const ACTION_SPACES = [
  {
    title: 'GO',
    badgeText: 'Corner',
    description: 'Collect ₼200 from the Bank each time you pass or land directly on this starting space.',
  },
  {
    title: 'Free Parking',
    badgeText: 'Corner',
    description: 'A neutral resting corner. No funds are collected, pooled, or distributed upon landing.',
  },
  {
    title: 'Chance & Community Chest',
    badgeText: 'Event Card',
    description: 'Draw the top card, execute its directive immediately, then return it face-down to the bottom of the deck.',
  },
  {
    title: 'Income & Luxury Tax',
    badgeText: 'Bank Assessment',
    description: 'Pay the exact printed assessment sum directly to the Bank reserves.',
  },
  {
    title: 'Go to Jail',
    badgeText: 'Corner Penalty',
    description: 'Sent directly to Jail. No ₼200 salary is awarded (even if passing GO), and your turn terminates immediately.',
  },
  {
    title: 'Just Visiting',
    badgeText: 'Transit Zone',
    description: 'When reaching the Jail space via normal dice roll, place token in the outer Just Visiting section with no penalty.',
  },
];

export const SpacesTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-spaces-title">
      <div className="rules-topic-banner">
        <h3 id="topic-spaces-title" className="rules-topic-title">
          Special Board Spaces & Events
        </h3>
        <p className="rules-topic-desc">
          Official regulations for corners, tax obligations, and event card draws.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
        }}
      >
        {ACTION_SPACES.map((space) => (
          <SpaceItemCard
            key={space.title}
            title={space.title}
            badgeText={space.badgeText}
            description={space.description}
          />
        ))}
      </div>
    </article>
  );
};
