import React from 'react';
import { Card } from '../../ui/Card';
import { Alert } from '../../ui/Alert';

export const TipsTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-tips-title">
      <h3 id="topic-tips-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Avoid these (they make the game longer)
      </h3>

      <Card colorVar="red">
        <ul>
          <li>
            <b>No money in the middle.</b> Landing on Free Parking gives you nothing.
          </li>
          <li>
            <b>Always auction.</b> If a player doesn't buy the property they land on, auction it.
          </li>
          <li>
            <b>No loans</b> and no &ldquo;I won&rsquo;t charge you rent later&rdquo; deals.
          </li>
        </ul>
      </Card>

      <Alert variant="good">
        🎯 <b>How to win:</b> buy as many properties as you can and collect rent. The last player
        who hasn&rsquo;t gone bankrupt wins.
      </Alert>
    </article>
  );
};
