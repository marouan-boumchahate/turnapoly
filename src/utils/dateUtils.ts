/**
 * Returns current local date and time formatted for HTML datetime-local input (YYYY-MM-DDTHH:mm).
 */
export function getNowLocalISOString(): string {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 16);
}

/**
 * Formats an ISO datetime string into human readable medium date and short time.
 */
export function formatDisplayDateTime(isoString: string): string {
  try {
    return new Date(isoString).toLocaleString([], {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  } catch {
    return isoString;
  }
}
