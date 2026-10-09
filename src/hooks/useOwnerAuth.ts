import { useState, useCallback } from 'react';
import {
  DEFAULT_OWNER_PASSCODE,
  STORAGE_KEY_OWNER_AUTH,
} from '../constants/ownerAuth';
import { loadFromStorage, saveToStorage } from '../utils/storage';

export function useOwnerAuth() {
  const [isOwner, setIsOwner] = useState<boolean>(() =>
    loadFromStorage<boolean>(STORAGE_KEY_OWNER_AUTH, false)
  );
  const [authError, setAuthError] = useState<string | null>(null);

  const loginAsOwner = useCallback((passcode: string): boolean => {
    if (passcode.trim() === DEFAULT_OWNER_PASSCODE) {
      setIsOwner(true);
      setAuthError(null);
      saveToStorage(STORAGE_KEY_OWNER_AUTH, true);
      return true;
    }
    setAuthError('Incorrect passcode. Access restricted to application owner.');
    return false;
  }, []);

  const logoutOwner = useCallback(() => {
    setIsOwner(false);
    setAuthError(null);
    saveToStorage(STORAGE_KEY_OWNER_AUTH, false);
  }, []);

  return {
    isOwner,
    authError,
    setAuthError,
    loginAsOwner,
    logoutOwner,
  };
}
