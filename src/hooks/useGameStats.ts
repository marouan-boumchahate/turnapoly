import { useMemo } from 'react';
import { GameRecord } from '../types/record';
import { calculateGameStats, extractUniqueWinnerNames } from '../utils/analytics';

export function useGameStats(games: GameRecord[]) {
  const stats = useMemo(() => calculateGameStats(games), [games]);
  const winnerSuggestions = useMemo(() => extractUniqueWinnerNames(games), [games]);

  return { stats, winnerSuggestions };
}
