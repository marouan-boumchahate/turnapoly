import React from 'react';
import { Card } from '../../ui/Card';
import { NumberedStep } from '../../ui/NumberedStep';
import { MoneyDenominations } from './MoneyDenominations';

export const SetupTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-setup-title">
      <h3 id="topic-setup-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Setup
      </h3>

      <Card colorVar="green">
        <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>In the box</h4>
        <p style={{ margin: '6px 0' }}>
          Board, 8 tokens, 28 Title Deeds, 16 Chance cards, 16 Community Chest cards, 32 houses, 12
          hotels, 2 dice, trays.
        </p>
      </Card>

      <Card colorVar="green" style={{ padding: '14px 18px' }}>
        <ol style={{ listStyle: 'none', padding: 0, margin: '8px 0' }}>
          <NumberedStep stepNumber={1} colorVar="green">
            <b>Pick a Banker.</b> They handle the bank&rsquo;s money, houses, hotels, Title Deeds
            and auctions. They can play too, but must keep their own money separate.{' '}
            <i>Being Banker doesn&rsquo;t allow cheating!</i>
          </NumberedStep>

          <NumberedStep stepNumber={2} colorVar="green">
            <b>Give each player ₼1500:</b>
            <MoneyDenominations />
          </NumberedStep>

          <NumberedStep stepNumber={3} colorVar="green">
            <b>Shuffle</b> Community Chest and Chance, and place each face down on the board.
          </NumberedStep>

          <NumberedStep stepNumber={4} colorVar="green">
            <b>Put every token on GO.</b> Dice go beside the board.
          </NumberedStep>
        </ol>
      </Card>
    </article>
  );
};
