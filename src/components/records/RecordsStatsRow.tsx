import React from 'react';
import { GameStats } from '../../types/stats';
import { formatCurrency } from '../../utils/formatCurrency';
import { StatBox } from './StatBox';

interface RecordsStatsRowProps {
  stats: GameStats;
}

export const RecordsStatsRow: React.FC<RecordsStatsRowProps> = ({ stats }) => {
  const topWinnerDisplay = stats.topWinner
    ? `${stats.topWinner} (${stats.topWinnerCount})`
    : '-';

  const mostCashDisplay =
    stats.mostCash !== null ? formatCurrency(stats.mostCash) : '-';

  return (
    <div
      className="stats"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        margin: '18px 0',
      }}
    >
      <StatBox value={stats.totalGames} label="Total Games" valueColor="var(--ink)" />
      <StatBox value={topWinnerDisplay} label="Top Winner" valueColor="var(--red)" />
      <StatBox value={mostCashDisplay} label="Most Cash Left" valueColor="var(--green)" />
    </div>
  );
};
