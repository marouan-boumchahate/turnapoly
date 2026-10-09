import React from 'react';
import { Card } from '../../ui/Card';
import { NumberedStep } from '../../ui/NumberedStep';
import { Alert } from '../../ui/Alert';

export const YourTurnTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-turn-title">
      <div className="rules-topic-banner">
        <h3 id="topic-turn-title" className="rules-topic-title">
          Turn Structure & Dice Mechanics
        </h3>
        <p className="rules-topic-desc">
          Official sequence of play, token navigation, and doubles regulations.
        </p>
      </div>

      <Card colorVar="blue">
        <h4 style={{ margin: '0 0 6px', fontSize: '18px' }}>Determining First Player</h4>
        <p style={{ margin: '0', color: 'var(--mute)', fontSize: '15px' }}>
          Each player rolls both dice. The highest total starts first. Turn order proceeds clockwise around the table.
        </p>
      </Card>

      <Card colorVar="blue" style={{ padding: '16px 20px', marginTop: '14px' }}>
        <h4 style={{ margin: '0 0 10px', fontSize: '18px' }}>Standard Turn Phases</h4>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <NumberedStep stepNumber={1} colorVar="blue">
            <b>Roll Both Dice:</b> Roll the two dice simultaneously onto the board.
          </NumberedStep>
          <NumberedStep stepNumber={2} colorVar="blue">
            <b>Advance Clockwise:</b> Move your token forward by the sum of the dice.
          </NumberedStep>
          <NumberedStep stepNumber={3} colorVar="blue">
            <b>Execute Space Action:</b> Comply with the directives of the destination space (pay rent, purchase, draw a card, or pay taxes).
          </NumberedStep>
          <NumberedStep stepNumber={4} colorVar="blue">
            <b>Pass Dice:</b> Conclude your turn and hand the dice to the player to your left.
          </NumberedStep>
        </ol>
      </Card>

      <Alert variant="tip" label="Doubles Regulations">
        <b>Rolling Doubles:</b> If both dice show identical numbers, execute your complete turn, then immediately roll again.
        <br />
        <b>Speeding Penalty:</b> Rolling doubles three consecutive times within the same turn triggers immediate incarceration. Your turn terminates instantly and your token moves directly to Jail.
      </Alert>
    </article>
  );
};
