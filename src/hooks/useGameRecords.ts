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
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Sync to local storage and remote cloud storage on changes
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
