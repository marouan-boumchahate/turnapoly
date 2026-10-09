import React from 'react';

export const RentTable: React.FC = () => {
  const tableHeaders = ['Property Category', 'Standard Rent Calculation', 'Monopoly / Multiplier Bonus'];

  const rows = [
    {
      category: 'Street (Color Group)',
      standard: 'Base value specified on Deed card',
      bonus: '2× rent if unimproved; increases with houses/hotels',
    },
    {
      category: 'Railroads / Stations',
      standard: 'Own 1: ₼25 · Own 2: ₼50',
      bonus: 'Own 3: ₼100 · Own 4: ₼200',
    },
    {
      category: 'Utilities (Electric / Water)',
      standard: '1 Utility: 4× current dice roll',
      bonus: 'Both Utilities: 10× current dice roll',
    },
  ];

  return (
    <div style={{ overflowX: 'auto', marginTop: '10px' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px',
          textAlign: 'left',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}>
            {tableHeaders.map((header) => (
              <th
                key={header}
                style={{
                  padding: '10px 14px',
                  borderBottom: '2px solid var(--border)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  letterSpacing: '0.02em',
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.category} style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--ink)' }}>
                {row.category}
              </td>
              <td style={{ padding: '12px 14px', color: 'var(--mute)' }}>
                {row.standard}
              </td>
              <td style={{ padding: '12px 14px', color: 'var(--green)', fontWeight: 600 }}>
                {row.bonus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
