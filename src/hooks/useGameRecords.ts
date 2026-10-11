import { useState, useCallback, useEffect } from 'react';
import initialRecords from '../data/gameRecords.json';
import { STORAGE_KEY_GAMES } from '../constants/storageKeys';
import { GameRecord } from '../types/record';
import { loadFromStorage, saveToStorage } from '../utils/storage';
import { fetchCloudRecords, syncRecordsToFile } from '../services/recordsSyncService';

export function useGameRecords() {
  const [games, setGames] = useState<GameRecord[]>(() => {
    const saved = loadFromStorage<GameRecord[] | null>(STORAGE_KEY_GAMES, null);
    if (saved !== null && Array.isArray(saved)) {
      return saved;
    }
    return initialRecords as GameRecord[];
  });

  // Fetch shared cloud records on initial load from any device
  useEffect(() => {
    let isMounted = true;
    fetchCloudRecords().then((cloudRecords) => {
      if (isMounted && cloudRecords !== null) {
        setGames(cloudRecords);
        saveToStorage(STORAGE_KEY_GAMES, cloudRecords);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const addGame = useCallback((newGame: Omit<GameRecord, 'id'>) => {
    const record: GameRecord = {
      ...newGame,
      id: Date.now(),
    };
    setGames((prev) => {
      const updated = [record, ...prev];
      saveToStorage(STORAGE_KEY_GAMES, updated);
      syncRecordsToFile(updated);
      return updated;
    });
  }, []);

  const deleteGame = useCallback((id: string | number) => {
    setGames((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      saveToStorage(STORAGE_KEY_GAMES, updated);
      syncRecordsToFile(updated);
      return updated;
    });
  }, []);

  return { games, addGame, deleteGame };
}
