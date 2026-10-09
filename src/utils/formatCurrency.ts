/**
 * Formats a number with Monopoly currency symbol ₼ and thousand separators.
 */
export function formatCurrency(amount: number): string {
  return `₼${Number(amount).toLocaleString()}`;
}
