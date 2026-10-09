import React from 'react';
import { Card } from '../../ui/Card';
import { Alert } from '../../ui/Alert';

export const NoMoneyTopic: React.FC = () => {
  return (
    <article aria-labelledby="topic-nomoney-title">
      <div className="rules-topic-banner">
        <h3 id="topic-nomoney-title" className="rules-topic-title">
          Debt Settlement & Elimination
        </h3>
        <p className="rules-topic-desc">
          Official protocol for raising emergency capital, deed encumbrance, and insolvency settlement.
        </p>
      </div>

      <h4 style={{ margin: '14px 0 8px', fontSize: '18px', color: 'var(--ink)' }}>
        Phase 1: Liquidation of Assets
      </h4>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
        }}
      >
        <Card colorVar="pink" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 6px', fontSize: '16px' }}>Building Liquidation</h4>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '14px', color: 'var(--mute)', display: 'grid', gap: '4px' }}>
            <li>Sell houses and hotels back to the Bank at 50% of printed price.</li>
            <li>Hotels are sold for half price and immediately broken down into 4 houses.</li>
            <li>Must sell evenly across the entire color set.</li>
          </ul>
        </Card>

        <Card colorVar="brown" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 6px', fontSize: '16px' }}>Mortgaging Properties</h4>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '14px', color: 'var(--mute)', display: 'grid', gap: '4px' }}>
            <li>All buildings in the color group must be liquidated first.</li>
            <li>Turn deed face-down to receive the printed mortgage value from the Bank.</li>
            <li>To unmortgage, repay the principal plus 10% interest.</li>
          </ul>
        </Card>
      </div>

      <Alert variant="tip" label="Rent on Encumbered Properties">
        Mortgaged properties cannot collect rent. However, unmortgaged properties in that same complete color group still collect double rent.
      </Alert>

      <h4 style={{ margin: '22px 0 8px', fontSize: '18px', color: 'var(--ink)' }}>
        Phase 2: Insolvency & Bankruptcy Declaration
      </h4>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '14px',
        }}
      >
        <Card colorVar="red" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 6px', fontSize: '16px' }}>Debt Owed to Another Player</h4>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--mute)', lineHeight: 1.5 }}>
            Surrender all remaining cash, mortgaged title deeds, and escape cards directly to your creditor. The creditor must immediately pay the Bank 10% interest on all received mortgaged deeds.
          </p>
        </Card>

        <Card colorVar="red" style={{ margin: 0 }}>
          <h4 style={{ margin: '0 0 6px', fontSize: '16px' }}>Debt Owed to the Bank</h4>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--mute)', lineHeight: 1.5 }}>
            Surrender all assets to the Bank. All mortgages are cancelled, and the Banker immediately auctions all surrendered properties individually to the highest bidders.
          </p>
        </Card>
      </div>

      <Alert variant="good" label="Tournament Conclusion" style={{ textAlign: 'center', marginTop: '18px' }}>
        The last remaining solvent participant is declared the tournament champion.
      </Alert>
    </article>
  );
};
