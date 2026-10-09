import React from 'react';
import { Card } from '../../ui/Card';

export const DealsTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-deals-title">
      <div className="rules-topic-banner">
        <h3 id="topic-deals-title" className="rules-topic-title">
          Negotiations & Asset Transfers
        </h3>
        <p className="rules-topic-desc">
          Official protocols for private player transactions and transferring encumbered properties.
        </p>
      </div>

      <Card colorVar="amber">
        <h4 style={{ margin: '0 0 8px', fontSize: '18px' }}>Trade Guidelines</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'grid', gap: '6px', fontSize: '15px' }}>
          <li>
            <b>Permitted Assets:</b> Players may freely buy, sell, or trade unimproved properties and &ldquo;Get Out of Jail Free&rdquo; cards at any point between turns.
          </li>
          <li>
            <b>Terms of Settlement:</b> Transactions may consist of cash, properties, cards, or combinations agreed mutually by both parties.
          </li>
          <li>
            <b>Prohibition on Immunity:</b> Agreements offering immunity from future rent or deferred debt are strictly void under official rules.
          </li>
          <li>
            <b>Pre-Sale Building Liquidation:</b> If any street in a color group has houses or hotels, all buildings in that set must be sold back to the Bank before any property of that group may be traded.
          </li>
        </ul>
      </Card>

      <Card colorVar="slate" style={{ marginTop: '14px' }}>
        <h4 style={{ margin: '0 0 6px', fontSize: '18px' }}>Transferring Mortgaged Properties</h4>
        <p style={{ margin: 0, fontSize: '15px', color: 'var(--mute)', lineHeight: 1.5 }}>
          Mortgaged deeds may be traded between players at whatever price is agreed upon. The new owner must immediately pay the Bank 10% interest on the mortgage value, and may either unmortgage the property immediately by paying the full principal, or hold it mortgaged and pay another 10% penalty when lifting it later.
        </p>
      </Card>
    </article>
  );
};
