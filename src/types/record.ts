export interface GameRecord {
  id: string | number;
  n: string; // Winner's name
  m: number; // Cash left
  d: string; // ISO datetime string
  s?: string; // Winner's signature (data URL)
}
