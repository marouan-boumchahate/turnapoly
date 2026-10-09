import { useState, useEffect, useCallback } from 'react';
import { STORAGE_KEY_THEME } from '../constants/storageKeys';
import { ThemeMode } from '../types/theme';
import { loadFromStorage, saveToStorage } from '../utils/storage';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() =>
    loadFromStorage<ThemeMode>(STORAGE_KEY_THEME, 'system')
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    saveToStorage(STORAGE_KEY_THEME, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  }, []);

  return { theme, setTheme, toggleTheme };
}
