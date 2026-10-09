import React from 'react';

export const RentTable: React.FC = () => {
  return (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '8px',
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              padding: '8px',
              borderBottom: '1px solid var(--border)',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Type
          </th>
          <th
            style={{
              padding: '8px',
              borderBottom: '1px solid var(--border)',
              textAlign: 'left',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Rent
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>
            🏙️ Street
          </td>
          <td style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>
            Amount on the Title Deed
          </td>
        </tr>
        <tr>
          <td style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>
            🚂 Stations / ports
          </td>
          <td style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>
            Own 1: ₼25 · 2: ₼50 · 3: ₼100 · 4: ₼200
          </td>
        </tr>
        <tr>
          <td style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>
            💡 Utilities
          </td>
          <td style={{ padding: '8px', borderBottom: '1px solid var(--border)' }}>
            Roll both dice. 1 utility: 4× roll. Both: 10× roll
          </td>
        </tr>
      </tbody>
    </table>
  );
};
