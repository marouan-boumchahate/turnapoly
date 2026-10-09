import React from 'react';

export const TopHat: React.FC = () => {
  return (
    <svg className="tophat-svg" viewBox="0 0 120 100" aria-hidden="true">
      <ellipse cx="60" cy="86" rx="52" ry="11" fill="#111111" />
      <path d="M26 84V22q0-14 34-14t34 14v62q-34 12-68 0z" fill="#1b1b1b" />
      <path d="M26 66q34 11 68 0v14q-34 12-68 0z" fill="#d6202e" />
      <ellipse cx="60" cy="22" rx="34" ry="10" fill="#333333" />
    </svg>
  );
};
