import React from 'react';

interface PlayerAutocompleteProps {
  id: string;
  names: string[];
}

export const PlayerAutocomplete: React.FC<PlayerAutocompleteProps> = ({ id, names }) => {
  return (
    <datalist id={id}>
      {names.map((name) => (
        <option key={name} value={name} />
      ))}
    </datalist>
  );
};
