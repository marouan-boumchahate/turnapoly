import React from 'react';
import { Card } from '../../ui/Card';
import { NumberedStep } from '../../ui/NumberedStep';
import { MoneyDenominations } from './MoneyDenominations';

export const SetupTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-setup-title">
      <div className="rules-topic-banner">
        <h3 id="topic-setup-title" className="rules-topic-title">
          Board Setup & Starting Capital
        </h3>
        <p className="rules-topic-desc">
          Official equipment distribution, Banker responsibilities, and standardized starting cash.
        </p>
      </div>

      <Card colorVar="green">
        <h4 style={{ margin: '0 0 6px', fontSize: '18px' }}>Standard Game Equipment</h4>
        <p style={{ margin: '0', color: 'var(--mute)', fontSize: '15px' }}>
          Game board, 8 player tokens, 28 Title Deed cards, 16 Chance cards, 16 Community Chest cards, 32 houses, 12 hotels, and 2 standard dice.
        </p>
      </Card>

      <Card colorVar="green" style={{ padding: '16px 20px', marginTop: '14px' }}>
        <h4 style={{ margin: '0 0 10px', fontSize: '18px' }}>Setup Checklist</h4>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <NumberedStep stepNumber={1} colorVar="slate">
            <b>Appoint the Banker:</b> The Banker manages the Bank&rsquo;s funds, title deeds, building reserves, and leads auctions. If the Banker also participates as a player, their personal funds must be kept strictly separated from the Bank.
          </NumberedStep>

          <NumberedStep stepNumber={2} colorVar="slate">
            <b>Distribute Starting Capital (₼1,500 per player):</b>
            <div style={{ marginTop: '8px' }}>
              <MoneyDenominations />
            </div>
          </NumberedStep>

          <NumberedStep stepNumber={3} colorVar="slate">
            <b>Prepare Card Decks:</b> Thoroughly shuffle Community Chest and Chance card decks, placing them face-down on their designated board spaces.
          </NumberedStep>

          <NumberedStep stepNumber={4} colorVar="slate">
            <b>Initial Positions:</b> Place all player tokens on the <b>GO</b> corner space. Place the two dice beside the board.
          </NumberedStep>
        </ol>
      </Card>
    </article>
  );
};
