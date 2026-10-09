import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { RecordsHeader } from './RecordsHeader';
import { RecordForm } from './RecordForm';
import { RecordsStatsRow } from './RecordsStatsRow';
import { RecordsList } from './RecordsList';
import { Toast } from '../ui/Toast';
import { useGameRecords } from '../../hooks/useGameRecords';
import { useGameStats } from '../../hooks/useGameStats';
import { GameRecord } from '../../types/record';

export const RecordsView: React.FC = () => {
  const { games, addGame, deleteGame } = useGameRecords();
  const { stats, winnerSuggestions } = useGameStats(games);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddGame = (newRecord: Omit<GameRecord, 'id'>) => {
    addGame(newRecord);
    showToast(`Game saved! Congratulations, ${newRecord.n}! 🏆`);

    // Smooth scroll to list as in original code
    setTimeout(() => {
      const listElement = document.getElementById('list');
      if (listElement) {
        listElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleDeleteGame = (id: string | number) => {
    deleteGame(id);
    showToast('Game record deleted.');
  };

  return (
    <Container id="records">
      <RecordsHeader />
      <RecordForm
        winnerSuggestions={winnerSuggestions}
        onSubmit={handleAddGame}
      />
      <RecordsStatsRow stats={stats} />
      <RecordsList games={games} onDeleteGame={handleDeleteGame} />
      <Toast message={toastMessage} />
    </Container>
  );
};
