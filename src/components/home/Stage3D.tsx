import React from 'react';
import { BoardGrid } from './BoardGrid';
import { TopHat } from './TopHat';
import { DicePair } from './DicePair';

export const Stage3D: React.FC = () => {
  return (
    <div className="hero-stage">
      <BoardGrid />
      <TopHat />
      <DicePair />
    </div>
  );
};
