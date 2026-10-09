import React from 'react';
import { Card } from '../../ui/Card';
import { NumberedStep } from '../../ui/NumberedStep';
import { Alert } from '../../ui/Alert';

export const YourTurnTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-turn-title">
      <h3 id="topic-turn-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Your turn
      </h3>

      <Card colorVar="blue">
        <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>Who starts?</h4>
        <p style={{ margin: '6px 0' }}>
          Everyone rolls both dice. Highest roll starts, then play goes clockwise.
        </p>
      </Card>

      <Card colorVar="blue" style={{ padding: '14px 18px' }}>
        <ol style={{ listStyle: 'none', padding: 0, margin: '8px 0' }}>
          <NumberedStep stepNumber={1} colorVar="blue">
            <b>Roll both dice.</b>
          </NumberedStep>
          <NumberedStep stepNumber={2} colorVar="blue">
            <b>Move clockwise</b> by the total.
          </NumberedStep>
          <NumberedStep stepNumber={3} colorVar="blue">
            <b>Follow the space</b> you land on.
          </NumberedStep>
          <NumberedStep stepNumber={4} colorVar="blue">
            <b>Pass the dice</b> to the player on your left.
          </NumberedStep>
        </ol>
      </Card>

      <Alert variant="tip">
        🎲🎲 <b>Doubles?</b> Take your turn, then roll again.
        <br />
        ⚠️ <b>Three doubles in a row?</b> Go straight to Jail. You don&rsquo;t take that third turn.
      </Alert>
    </article>
  );
};
