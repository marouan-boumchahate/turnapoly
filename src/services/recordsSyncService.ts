import { GameRecord } from '../types/record';

export async function syncRecordsToFile(records: GameRecord[]): Promise<boolean> {
  if (import.meta.env.DEV) {
    try {
      const response = await fetch('/api/save-records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(records),
      });
      return response.ok;
    } catch {
      return false;
    }
  }
  return false;
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
