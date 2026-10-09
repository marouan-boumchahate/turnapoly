import React from 'react';
import { BOARD_SPACES } from '../../data/boardSpacesData';
import { BoardTile } from './BoardTile';

export const BoardGrid: React.FC = () => {
  return (
    <div className="mono-3d-board" id="board" aria-label="3D Monopoly Board Graphic">
      <div className="mono-board-center">
        <span>MONOPOLY</span>
      </div>
      {BOARD_SPACES.map((space) => (
        <BoardTile key={space.index} space={space} />
      ))}
    </div>
  );
};
