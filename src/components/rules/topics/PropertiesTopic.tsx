import React from 'react';
import { Card } from '../../ui/Card';
import { Alert } from '../../ui/Alert';
import { RentTable } from './RentTable';

export const PropertiesTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-properties-title">
      <h3 id="topic-properties-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Properties
      </h3>
      <p style={{ margin: '6px 0 12px' }}>
        Three kinds: streets (color groups), stations/ports, utilities.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '12px',
        }}
      >
        <Card colorVar="brown" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>Nobody owns it</h4>
          <p style={{ margin: '6px 0' }}>
            <b>Buy it</b> for the price on the board and take the Title Deed, <b>or auction it</b>.
          </p>
        </Card>

        <Card colorVar="brown" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>Someone owns it</h4>
          <p style={{ margin: '6px 0' }}>
            The owner must <b>ask</b> for rent and you must pay. If they forget before the next
            player rolls, they lose it.
          </p>
        </Card>
      </div>

      <Card colorVar="orange">
        <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>🔨 Auction</h4>
        <ul style={{ margin: '6px 0' }}>
          <li>The Banker runs it. Everyone can bid, including you.</li>
          <li>Starts at ₼10, each bid at least ₼1 higher, any order.</li>
          <li>When nobody raises, the highest bidder pays the bank only their bid.</li>
          <li>No bids? Nothing is paid and the card stays with the bank.</li>
        </ul>
      </Card>

      <Card colorVar="green">
        <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>Rent</h4>
        <RentTable />
      </Card>

      <Alert variant="tip">
        🌈 Own every street of one color and you charge <b>double rent</b> and can build.
      </Alert>
    </article>
  );
};
