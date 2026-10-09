import React from 'react';
import { Card } from '../../ui/Card';
import { Alert } from '../../ui/Alert';
import { NumberedStep } from '../../ui/NumberedStep';

export const BuildingsTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-buildings-title">
      <h3 id="topic-buildings-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Buildings
      </h3>

      <Card colorVar="pink">
        <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>🏡 Houses</h4>
        <ul style={{ margin: '6px 0' }}>
          <li>You need the full color set (no need to wait for your turn).</li>
          <li>Pay the house price on the Title Deed to the bank and place it on the street.</li>
          <li>Maximum 4 houses per street.</li>
        </ul>
        <Alert variant="warn">
          ⚖️ <b>Build evenly.</b> No 2nd house on a street until every street in the set has 1. A 3rd
          needs 2 on each, a 4th needs 3 on each.
        </Alert>
      </Card>

      <Card colorVar="pink">
        <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>🏨 Hotels</h4>
        <p style={{ margin: '6px 0' }}>
          A hotel is the top upgrade. It <b>replaces</b> that street&rsquo;s 4 houses.
        </p>

        <Alert variant="good">
          You need the full set, with 4 houses on <b>every</b> street of it.
        </Alert>

        <ol style={{ listStyle: 'none', padding: 0, margin: '8px 0' }}>
          <NumberedStep stepNumber={1} colorVar="pink">
            Pick one street to upgrade.
          </NumberedStep>
          <NumberedStep stepNumber={2} colorVar="pink">
            Pay the hotel price on its Title Deed to the bank.
          </NumberedStep>
          <NumberedStep stepNumber={3} colorVar="pink">
            Give that street&rsquo;s 4 houses back to the bank.
          </NumberedStep>
          <NumberedStep stepNumber={4} colorVar="pink">
            Place the hotel on the street.
          </NumberedStep>
        </ol>

        <Alert variant="warn">
          Only 1 hotel per street, no houses beside it. If any street of the set is mortgaged, you
          can&rsquo;t build on any of them.
        </Alert>
      </Card>

      <Card colorVar="pink">
        <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>Building shortage</h4>
        <p style={{ margin: '6px 0' }}>
          If several players want the last house or hotel, the Banker auctions it (start ₼10, raises
          of at least ₼1) and the winner pays only their bid. If none are left, wait until someone
          sells buildings to the bank. Buildings can&rsquo;t be traded between players.
        </p>
      </Card>
    </article>
  );
};
