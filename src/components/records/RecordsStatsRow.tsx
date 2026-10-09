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
        gap: '10px',
        margin: '16px 0',
      }}
    >
      <StatBox value={stats.totalGames} label="Games" />
      <StatBox value={topWinnerDisplay} label="Top winner" />
      <StatBox value={mostCashDisplay} label="Most cash left" />
    </div>
  );
};
