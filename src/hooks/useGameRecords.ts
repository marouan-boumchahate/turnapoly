import { useState, useCallback, useEffect } from 'react';
import { STORAGE_KEY_GAMES } from '../constants/storageKeys';
import { GameRecord } from '../types/record';
import { loadFromStorage, saveToStorage } from '../utils/storage';

export function useGameRecords() {
  const [games, setGames] = useState<GameRecord[]>(() =>
    loadFromStorage<GameRecord[]>(STORAGE_KEY_GAMES, [])
  );

  useEffect(() => {
    saveToStorage(STORAGE_KEY_GAMES, games);
  }, [games]);

  const addGame = useCallback((newGame: Omit<GameRecord, 'id'>) => {
    const record: GameRecord = {
      ...newGame,
      id: Date.now() + Math.random(),
    };
    setGames((prev) => [record, ...prev]);
  }, []);

  const deleteGame = useCallback((id: string | number) => {
    setGames((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return { games, addGame, deleteGame };
}
