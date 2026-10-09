import React from 'react';
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
      {sortedGames.map((game) => (
        <RecordCard
          key={game.id}
          record={game}
          accentColor="red"
          onDelete={onDeleteGame}
        />
      ))}
    </div>
  );
};
