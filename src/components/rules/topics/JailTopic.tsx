import React from 'react';
import { Card } from '../../ui/Card';
import { NumberedStep } from '../../ui/NumberedStep';
import { Alert } from '../../ui/Alert';

export const JailTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-jail-title">
      <div className="rules-topic-banner">
        <h3 id="topic-jail-title" className="rules-topic-title">
          Incarceration & Escape Options
        </h3>
        <p className="rules-topic-desc">
          Player rights while in custody and the three legitimate release protocols.
        </p>
      </div>

      <Alert variant="good" label="Active Rights While Detained">
        Being in Jail does not halt your economic power. You continue to collect rent, participate in auctions, construct buildings, mortgage properties, and trade with other players.
      </Alert>

      <Card colorVar="amber" style={{ padding: '16px 20px', marginTop: '14px' }}>
        <h4 style={{ margin: '0 0 10px', fontSize: '18px' }}>Release Protocols (Choose One)</h4>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <NumberedStep stepNumber={1} colorVar="amber">
            <b>Pay Fine (₼50):</b> Pay ₼50 to the Bank prior to rolling on either of your next two turns, then roll both dice and advance normally.
          </NumberedStep>
          <NumberedStep stepNumber={2} colorVar="amber">
            <b>Play Escape Card:</b> Surrender an owned &ldquo;Get Out of Jail Free&rdquo; card at the start of your turn (or buy one from another player), return it face-up to its deck, then roll and advance.
          </NumberedStep>
          <NumberedStep stepNumber={3} colorVar="amber">
            <b>Attempt Doubles:</b> Attempt to roll doubles on your turn. If successful, advance by that roll with no fine (your turn ends immediately; no second roll). You have up to 3 turns to attempt this; failing on the third attempt requires paying ₼50 before moving by the third roll total.
          </NumberedStep>
        </ol>
      </Card>
    </article>
  );
};
