// Default SHA-256 hash for default owner passcode ('turnapoly2026')
export const DEFAULT_OWNER_HASH =
  (import.meta.env.VITE_OWNER_PASSCODE_HASH as string) ||
  '101f819cccf54441b90eac4074461a5cb544f17586b37e3b8c3b9284dce9ef25';

// Optional plaintext fallback if developer specifies VITE_OWNER_PASSCODE
export const OPTIONAL_PLAINTEXT_PASSCODE =
  (import.meta.env.VITE_OWNER_PASSCODE as string) || '';

export const STORAGE_KEY_OWNER_AUTH = 'mono_owner_authenticated_v1';
