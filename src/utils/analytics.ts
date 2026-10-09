import { GameRecord } from '../types/record';
import { GameStats } from '../types/stats';

/**
 * Computes game record summary metrics:
 * - Total number of games
 * - Top winner and win count
 * - Highest cash recorded
 */
export function calculateGameStats(games: GameRecord[]): GameStats {
  if (games.length === 0) {
    return {
      totalGames: 0,
      topWinner: null,
      topWinnerCount: 0,
      mostCash: null,
    };
  }

  const winCounts: Record<string, { name: string; count: number }> = {};
  let maxCash = -Infinity;

  for (const game of games) {
    const key = game.n.trim().toLowerCase();
    if (!winCounts[key]) {
      winCounts[key] = { name: game.n, count: 0 };
    }
    winCounts[key].count += 1;

    if (game.m > maxCash) {
      maxCash = game.m;
    }
  }

  const sortedWinners = Object.values(winCounts).sort((a, b) => b.count - a.count);
  const topWinnerEntry = sortedWinners[0];

  return {
    totalGames: games.length,
    topWinner: topWinnerEntry ? topWinnerEntry.name : null,
    topWinnerCount: topWinnerEntry ? topWinnerEntry.count : 0,
    mostCash: maxCash === -Infinity ? null : maxCash,
  };
}

/**
 * Extracts unique winner names for autocomplete datalist suggestions.
 */
export function extractUniqueWinnerNames(games: GameRecord[]): string[] {
  const map = new Map<string, string>();
  for (const game of games) {
    const trimmed = game.n.trim();
    if (trimmed && !map.has(trimmed.toLowerCase())) {
      map.set(trimmed.toLowerCase(), trimmed);
    }
  }
  return Array.from(map.values());
}
