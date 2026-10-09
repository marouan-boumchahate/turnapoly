import { BOARD_COLOR_MAP } from '../constants/themeColors';
import { BoardSpaceConfig } from '../types/board';

export const BOARD_SPACES: BoardSpaceConfig[] = Array.from({ length: 40 }, (_, i) => {
  let row: number;
  let col: number;
  let side: 'top' | 'right' | 'bottom' | 'left';

  if (i < 10) {
    row = 10;
    col = 10 - i;
    side = 'top';
  } else if (i < 20) {
    col = 0;
    row = 20 - i;
    side = 'right';
  } else if (i < 30) {
    row = 0;
    col = i - 20;
    side = 'bottom';
  } else {
    col = 10;
    row = i - 30;
    side = 'left';
  }

  return {
    index: i,
    row,
    col,
    side,
    colorName: BOARD_COLOR_MAP[i],
    isCorner: i % 10 === 0,
  };
});
