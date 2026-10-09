import React from 'react';
import { Card } from '../../ui/Card';
import { Alert } from '../../ui/Alert';
import { RentTable } from './RentTable';

export const PropertiesTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-properties-title">
      <div className="rules-topic-banner">
        <h3 id="topic-properties-title" className="rules-topic-title">
          Property Acquisitions & Auctions
        </h3>
        <p className="rules-topic-desc">
          Official protocol for purchasing title deeds, conducting mandatory public auctions, and collecting rent.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
        }}
      >
        <Card colorVar="brown" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 6px', fontSize: '17px' }}>Unowned Property</h4>
          <p style={{ margin: 0, fontSize: '15px', color: 'var(--mute)', lineHeight: 1.5 }}>
            Purchase at the printed board price and claim the Title Deed, or decline purchase to trigger an immediate public auction.
          </p>
        </Card>

        <Card colorVar="brown" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 6px', fontSize: '17px' }}>Owned Property</h4>
          <p style={{ margin: 0, fontSize: '15px', color: 'var(--mute)', lineHeight: 1.5 }}>
            The owner must verbally demand rent before the next player rolls the dice. If they fail to claim before the roll, the debt is permanently forfeited.
          </p>
        </Card>
      </div>

      <Card colorVar="orange" style={{ marginTop: '14px' }}>
        <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Official Auction Procedure</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '6px', fontSize: '15px' }}>
          <li>The Banker officiates all bidding. Every participant may bid, including the player who declined purchase.</li>
          <li>Bidding opens at ₼10, with subsequent bids advancing by at least ₼1 in any order.</li>
          <li>When all higher bids cease, the winning bidder remits only their final bid to the Bank and acquires the deed.</li>
          <li>If zero bids are tendered, the property remains in Bank reserves with no exchange of funds.</li>
        </ul>
      </Card>

      <Card colorVar="green" style={{ marginTop: '14px' }}>
        <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Official Rent Schedule</h4>
        <RentTable />
      </Card>

      <Alert variant="tip" label="Monopoly Multiplier Rule">
        Securing all title deeds in a single color group establishes a monopoly, permitting the owner to charge double rent on unimproved streets and unlock construction rights.
      </Alert>
    </article>
  );
};
