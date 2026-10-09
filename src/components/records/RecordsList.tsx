import React from 'react';
import { RECORD_BORDER_COLORS } from '../../constants/themeColors';
import { GameRecord } from '../../types/record';
import { RecordCard } from './RecordCard';
import { RecordsEmptyState } from './RecordsEmptyState';

interface RecordsListProps {
  games: GameRecord[];
  onDeleteGame: (id: string | number) => void;
}

export const RecordsList: React.FC<RecordsListProps> = ({ games, onDeleteGame }) => {
  if (games.length === 0) {
    return <RecordsEmptyState />;
  }

  const sortedGames = [...games].sort((a, b) => b.d.localeCompare(a.d));

  return (
    <div id="list" role="feed" aria-label="Game records list">
      {sortedGames.map((game, index) => (
        <RecordCard
          key={game.id}
          record={game}
          accentColor={RECORD_BORDER_COLORS[index % RECORD_BORDER_COLORS.length]}
          onDelete={onDeleteGame}
        />
      ))}
    </div>
  );
};
