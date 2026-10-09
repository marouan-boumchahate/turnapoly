import React from 'react';
import { Card } from '../../ui/Card';
import { Alert } from '../../ui/Alert';
import { NumberedStep } from '../../ui/NumberedStep';

export const BuildingsTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-buildings-title">
      <div className="rules-topic-banner">
        <h3 id="topic-buildings-title" className="rules-topic-title">
          Building Upgrades & Development
        </h3>
        <p className="rules-topic-desc">
          Official development requirements, even-building regulations, and housing shortage auctions.
        </p>
      </div>

      <Card colorVar="green">
        <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>House Construction Rules</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '6px', fontSize: '15px' }}>
          <li>You must own all title deeds in a complete color group (building may occur at any time, even on opponents&rsquo; turns).</li>
          <li>Pay the building fee printed on the Title Deed directly to the Bank and position the house on the deed&rsquo;s space.</li>
          <li>A maximum of 4 houses may be placed on any individual street.</li>
        </ul>
        <Alert variant="warn" label="Even Building Regulation">
          You must build evenly across the set. You cannot place a second house on any street until all properties in that color set have at least one house.
        </Alert>
      </Card>

      <Card colorVar="red" style={{ marginTop: '14px' }}>
        <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Hotel Upgrade Conversion</h4>
        <p style={{ margin: '0 0 10px', fontSize: '15px', color: 'var(--mute)' }}>
          Hotels represent the maximum tier of development. A hotel replaces the 4 existing houses on that street.
        </p>

        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <NumberedStep stepNumber={1} colorVar="red">
            Verify every street in the color group currently possesses exactly 4 houses.
          </NumberedStep>
          <NumberedStep stepNumber={2} colorVar="red">
            Pay the hotel fee printed on the Title Deed to the Bank.
          </NumberedStep>
          <NumberedStep stepNumber={3} colorVar="red">
            Return all 4 houses from that street back to the Bank reserve.
          </NumberedStep>
          <NumberedStep stepNumber={4} colorVar="red">
            Place the hotel on the street. (Maximum 1 hotel per property; no accompanying houses).
          </NumberedStep>
        </ol>
      </Card>

      <Card colorVar="slate" style={{ marginTop: '14px' }}>
        <h4 style={{ margin: '0 0 6px', fontSize: '18px' }}>Bank Housing Shortages</h4>
        <p style={{ margin: 0, fontSize: '15px', color: 'var(--mute)', lineHeight: 1.5 }}>
          When the Bank runs out of houses or hotels and multiple players wish to purchase the remaining supply, the Banker must auction each available building to the highest bidder (bidding opens at ₼10). Buildings may never be traded privately between players.
        </p>
      </Card>
    </article>
  );
};
