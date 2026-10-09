import { useState, useCallback, useEffect } from 'react';
import initialRecords from '../data/gameRecords.json';
import { STORAGE_KEY_GAMES } from '../constants/storageKeys';
import { GameRecord } from '../types/record';
import { loadFromStorage, saveToStorage } from '../utils/storage';
import { syncRecordsToFile } from '../services/recordsSyncService';

export function useGameRecords() {
  const [games, setGames] = useState<GameRecord[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage?.removeItem('mono-games');
      } catch {
        // Ignored
      }
    }
    const saved = loadFromStorage<GameRecord[] | null>(STORAGE_KEY_GAMES, null);
    if (saved !== null && Array.isArray(saved)) {
      return saved;
    }
    return initialRecords as GameRecord[];
  });

  useEffect(() => {
    saveToStorage(STORAGE_KEY_GAMES, games);
    syncRecordsToFile(games);
  }, [games]);

  const addGame = useCallback((newGame: Omit<GameRecord, 'id'>) => {
    const record: GameRecord = {
      ...newGame,
      id: Date.now(),
    };
    setGames((prev) => [record, ...prev]);
  }, []);

  const deleteGame = useCallback((id: string | number) => {
    setGames((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return { games, addGame, deleteGame };
}
