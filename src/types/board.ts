export interface BoardSpaceConfig {
  index: number;
  row: number;
  col: number;
  side: 'top' | 'right' | 'bottom' | 'left';
  colorName?: string;
  isCorner: boolean;
}
