import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { RecordsHeader } from './RecordsHeader';
import { RecordForm } from './RecordForm';
import { RecordsStatsRow } from './RecordsStatsRow';
import { RecordsList } from './RecordsList';
import { OwnerStatusBar } from './OwnerStatusBar';
import { OwnerAuthModal } from './OwnerAuthModal';
import { Toast } from '../ui/Toast';
import { useGameRecords } from '../../hooks/useGameRecords';
import { useGameStats } from '../../hooks/useGameStats';
import { useOwnerAuth } from '../../hooks/useOwnerAuth';
import { GameRecord } from '../../types/record';

export const RecordsView: React.FC = () => {
  const { games, addGame, deleteGame } = useGameRecords();
  const { stats, winnerSuggestions } = useGameStats(games);
  const { isOwner, authError, setAuthError, loginAsOwner, logoutOwner } = useOwnerAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddGame = (newRecord: Omit<GameRecord, 'id'>) => {
    addGame(newRecord);
    showToast(`Winner record saved! Congratulations, ${newRecord.n}! 🏆`);

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

  const handleAuthSubmit = (passcode: string) => {
    if (loginAsOwner(passcode)) {
      setIsAuthModalOpen(false);
      showToast('Owner access granted! 👑');
    }
  };

  return (
    <Container id="records">
      <RecordsHeader />

      <OwnerStatusBar
        isOwner={isOwner}
        games={games}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={() => {
          logoutOwner();
          showToast('Owner mode locked.');
        }}
      />

      {isOwner && (
        <RecordForm
          winnerSuggestions={winnerSuggestions}
          onSubmit={handleAddGame}
        />
      )}

      <RecordsStatsRow stats={stats} />
      <RecordsList games={games} isOwner={isOwner} onDeleteGame={handleDeleteGame} />
      <Toast message={toastMessage} />

      <OwnerAuthModal
        isOpen={isAuthModalOpen}
        error={authError}
        onClose={() => {
          setIsAuthModalOpen(false);
          setAuthError(null);
        }}
        onSubmit={handleAuthSubmit}
      />
    </Container>
  );
};
