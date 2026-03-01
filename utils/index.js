/**
 * Tronque un texte à une longueur maximale.
 */
export function truncateText(text, maxLength = 120) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
}

/**
 * Simule un délai réseau (utilisé dans les services).
 * @param {number} ms - Délai en millisecondes
 */
export function delay(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
