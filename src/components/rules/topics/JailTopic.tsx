import React from 'react';
import { Card } from '../../ui/Card';
import { NumberedStep } from '../../ui/NumberedStep';
import { Alert } from '../../ui/Alert';

export const JailTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-jail-title">
      <h3 id="topic-jail-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Jail
      </h3>

      <Alert variant="good">
        In Jail you can still collect rent, join auctions, build, mortgage and make deals.
      </Alert>

      <Card colorVar="orange" style={{ padding: '14px 18px' }}>
        <ol style={{ listStyle: 'none', padding: 0, margin: '8px 0' }}>
          <NumberedStep stepNumber={1} colorVar="orange">
            <b>Pay ₼50</b> before rolling on your next turn, then roll and move.
          </NumberedStep>
          <NumberedStep stepNumber={2} colorVar="orange">
            <b>Use a &ldquo;Get Out of Jail Free&rdquo; card</b> at the start of your next turn. Put
            it face up at the bottom of its pile, then roll and move.
          </NumberedStep>
          <NumberedStep stepNumber={3} colorVar="orange">
            <b>Roll doubles</b> on your next turn: you leave free, move that number, and your turn
            ends. You get up to 3 tries. If you fail the third time, pay ₼50 and move by your roll.
          </NumberedStep>
        </ol>
      </Card>

      <p style={{ color: 'var(--mute)', margin: '10px 0 0', fontSize: '15px' }}>
        These are three different options. Choose one.
      </p>
    </article>
  );
};
