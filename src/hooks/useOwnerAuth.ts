import { useState, useCallback } from 'react';
import {
  DEFAULT_OWNER_HASH,
  OPTIONAL_PLAINTEXT_PASSCODE,
  STORAGE_KEY_OWNER_AUTH,
} from '../constants/ownerAuth';
import { computeSha256 } from '../utils/crypto';
import { loadFromStorage, saveToStorage } from '../utils/storage';

export function useOwnerAuth() {
  const [isOwner, setIsOwner] = useState<boolean>(() =>
    loadFromStorage<boolean>(STORAGE_KEY_OWNER_AUTH, false)
  );
  const [authError, setAuthError] = useState<string | null>(null);

  const loginAsOwner = useCallback(async (passcode: string): Promise<boolean> => {
    const trimmed = passcode.trim();
    if (!trimmed) {
      setAuthError('Please enter a passcode.');
      return false;
    }

    try {
      const hashedInput = await computeSha256(trimmed);
      const isHashMatch = hashedInput === DEFAULT_OWNER_HASH;
      const isPlainMatch =
        OPTIONAL_PLAINTEXT_PASSCODE !== '' && trimmed === OPTIONAL_PLAINTEXT_PASSCODE;

      if (isHashMatch || isPlainMatch) {
        setIsOwner(true);
        setAuthError(null);
        saveToStorage(STORAGE_KEY_OWNER_AUTH, true);
        return true;
      }
    } catch {
      if (OPTIONAL_PLAINTEXT_PASSCODE !== '' && trimmed === OPTIONAL_PLAINTEXT_PASSCODE) {
        setIsOwner(true);
        setAuthError(null);
        saveToStorage(STORAGE_KEY_OWNER_AUTH, true);
        return true;
      }
    }

    setAuthError('Incorrect passcode. Access restricted to application owner.');
    return false;
  }, []);

  const logoutOwner = useCallback(() => {
    setIsOwner(false);
    setAuthError(null);
    saveToStorage(STORAGE_KEY_OWNER_AUTH, false);
  }, []);

  return { isOwner, authError, setAuthError, loginAsOwner, logoutOwner };
}
