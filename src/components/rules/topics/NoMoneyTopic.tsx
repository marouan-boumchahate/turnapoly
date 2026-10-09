import React from 'react';
import { Card } from '../../ui/Card';
import { Alert } from '../../ui/Alert';

export const NoMoneyTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-nomoney-title">
      <h3 id="topic-nomoney-title" style={{ fontSize: '28px', margin: '6px 0 10px' }}>
        Help! I&rsquo;m out of money!
      </h3>

      <h4
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '22px',
          margin: '8px 0 0',
        }}
      >
        Step 1: Raise cash
      </h4>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '12px',
          marginTop: '8px',
        }}
      >
        <Card colorVar="pink" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>Sell buildings</h4>
          <ul style={{ margin: '6px 0' }}>
            <li>
              <b>Hotel:</b> half its price, and you get 4 houses.
            </li>
            <li>
              <b>House:</b> half its price.
            </li>
            <li>Sell evenly, like building.</li>
          </ul>
        </Card>

        <Card colorVar="brown" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>Mortgage</h4>
          <ul style={{ margin: '6px 0' }}>
            <li>Sell all buildings in that color set first.</li>
            <li>Flip the Title Deed face down, take the mortgage value from the bank.</li>
            <li>
              <b>Lift it:</b> pay the lifting cost, flip it face up.
            </li>
          </ul>
        </Card>
      </div>

      <Alert variant="tip">
        Mortgaged properties earn no rent. With a full color set and one street mortgaged, you still
        charge double rent on the others. Same for unmortgaged stations/ports and utilities.
      </Alert>

      <h4
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          fontSize: '22px',
          margin: '16px 0 0',
        }}
      >
        Step 2: Still in debt? You&rsquo;re bankrupt and out
      </h4>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '12px',
          marginTop: '8px',
        }}
      >
        <Card colorVar="red" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>You owe a player</h4>
          <p style={{ margin: '6px 0' }}>
            Give them all your mortgaged properties and any &ldquo;Get Out of Jail Free&rdquo; card.
            They can lift the mortgage now or later.
          </p>
        </Card>

        <Card colorVar="red" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 4px', fontSize: '20px' }}>You owe the bank</h4>
          <ul style={{ margin: '6px 0' }}>
            <li>Return everything. Mortgages are cancelled.</li>
            <li>Your properties are auctioned immediately, one card at a time.</li>
            <li>Jail card goes to the bottom of its pile.</li>
          </ul>
        </Card>
      </div>

      <Alert variant="good" style={{ textAlign: 'center', fontSize: '20px' }}>
        🏁 The last player standing wins!
      </Alert>
    </article>
  );
};
