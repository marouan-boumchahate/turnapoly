import React from 'react';
import { Card } from '../../ui/Card';

export const DealsTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-deals-title">
      <h3 id="topic-deals-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Deals and trades
      </h3>

      <Card colorVar="yellow">
        <ul style={{ margin: '6px 0' }}>
          <li>
            Any time, buy, sell or swap properties and &ldquo;Get Out of Jail Free&rdquo; cards
            with other players.
          </li>
          <li>Trade for profit, never out of kindness. No loans.</li>
          <li>
            Pay with cash, properties, a Jail card, or a mix. You agree the value together.
          </li>
          <li>
            If a color set has buildings, sell them to the bank before trading any street of that
            set.
          </li>
        </ul>
      </Card>

      <Card colorVar="yellow">
        <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>Mortgaged property</h4>
        <p style={{ margin: '6px 0' }}>
          It can be traded at the agreed price. The new owner either (a) pays the mortgage-lifting
          cost to the bank right away, or (b) waits and lifts it on a later turn.
        </p>
      </Card>
    </article>
  );
};
