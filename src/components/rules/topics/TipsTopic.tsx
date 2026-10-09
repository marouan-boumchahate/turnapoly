import React from 'react';
import { Card } from '../../ui/Card';
import { Alert } from '../../ui/Alert';

export const TipsTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-tips-title">
      <div className="rules-topic-banner">
        <h3 id="topic-tips-title" className="rules-topic-title">
          Essential Rules & Winning Objective
        </h3>
        <p className="rules-topic-desc">
          Official tournament rules to maintain fast pacing, balanced economy, and prevent stalled games.
        </p>
      </div>

      <Card colorVar="red">
        <h4 style={{ margin: '0 0 10px', fontSize: '18px' }}>
          Avoid Informal &ldquo;House Rules&rdquo;
        </h4>
        <ul style={{ margin: '0', paddingLeft: '20px', display: 'grid', gap: '8px' }}>
          <li>
            <b>No Free Parking Jackpot:</b> Landing on Free Parking yields zero cash. Fines and taxes are paid directly to the Bank, never pooled in the board center.
          </li>
          <li>
            <b>Mandatory Public Auctions:</b> Whenever a player lands on an unowned property and declines to purchase it at board price, the Banker must immediately auction it to all players.
          </li>
          <li>
            <b>Prohibition on Player Loans:</b> Players may neither borrow money from one another nor negotiate future rent immunity concessions.
          </li>
        </ul>
      </Card>

      <Alert variant="good" label="Primary Objective">
        Buy properties, assemble complete color groups to build houses and hotels, and collect rent from competitors. The last solvent player remaining wins the match.
      </Alert>
    </article>
  );
};
