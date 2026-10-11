import { GameRecord } from '../types/record';
import {
  DEFAULT_OWNER_HASH,
  STORAGE_KEY_OWNER_AUTH,
  STORAGE_KEY_OWNER_TOKEN,
} from '../constants/ownerAuth';
import { loadFromStorage } from '../utils/storage';

export async function fetchCloudRecords(): Promise<GameRecord[] | null> {
  try {
    const res = await fetch('/api/records', { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? data : null;
  } catch {
    return null;
  }
}

export async function syncRecordsToFile(records: GameRecord[]): Promise<boolean> {
  try {
    let token = loadFromStorage<string | null>(STORAGE_KEY_OWNER_TOKEN, null);
    const isAuthed = loadFromStorage<boolean>(STORAGE_KEY_OWNER_AUTH, false);

    if (!token && isAuthed) {
      token = DEFAULT_OWNER_HASH;
    }

    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch('/api/records', {
      method: 'POST',
      headers,
      body: JSON.stringify(records),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export function downloadRecordsJson(records: GameRecord[]) {
  const dataStr =
    'data:text/json;charset=utf-8,' +
    encodeURIComponent(JSON.stringify(records, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', 'gameRecords.json');
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
