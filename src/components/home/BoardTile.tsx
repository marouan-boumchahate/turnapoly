import React from 'react';
import { BoardSpaceConfig } from '../../types/board';

interface BoardTileProps {
  space: BoardSpaceConfig;
}

export const BoardTile: React.FC<BoardTileProps> = ({ space }) => {
  const { row, col, side, colorName, isCorner } = space;

  const getBorderStyle = () => {
    if (!colorName) return {};
    const capitalized = side.charAt(0).toUpperCase() + side.slice(1);
    return {
      [`border${capitalized}`]: `7px solid var(--${colorName})`,
    };
  };

  return (
    <i
      style={{
        gridArea: `${row + 1} / ${col + 1}`,
        backgroundColor: isCorner ? '#ffd4d0' : '#f4fbf6',
        border: '0.5px solid rgba(0, 0, 0, 0.12)',
        display: 'block',
        fontStyle: 'normal',
        ...getBorderStyle(),
      }}
    />
  );
};
